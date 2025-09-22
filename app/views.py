
import email
import sys
import random
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from app.models import Customer, LoginForm   
from app.serializers import CustomerSerializer
from mongoengine import Document, fields
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail
from .models import Order
from .serializers import OrderSerializer
from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Customer, LoginForm
from django.contrib.auth.hashers import check_password

# Temporary in-memory store for OTPs (for testing only)
OTP_STORE = {}  
PASSWORD_STORE = {}  # key = email, value = password

def generate_otp(length=6):
    """Generate a numeric OTP of given length"""
    return ''.join([str(random.randint(0, 9)) for _ in range(length)])

class SendOtpView(APIView):
    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({"success": False, "message": "Email required"})
        
        otp = generate_otp()
        OTP_STORE[email] = otp
        print(f"OTP for {email} is {otp}")  # For testing, prints OTP to console
        # In real app, send OTP via email or SMS here

        return Response({"success": True, "message": f"OTP sent to {email}"})

class VerifyOtpView(APIView):
    def post(self, request):
        email = request.data.get('email')
        otp = request.data.get('otp')
        stored_otp = OTP_STORE.get(email)

        if stored_otp and stored_otp == otp:
            del OTP_STORE[email]  # Remove OTP after successful verification
            return Response({"success": True, "message": "OTP verified"})
        return Response({"success": False, "message": "Invalid OTP"})



from rest_framework.views import APIView
from rest_framework.response import Response

PASSWORD_STORE = {}  # demo password store

class ResetPasswordView(APIView):
    def get(self, request):
        return Response({"success": False, "message": "Please use POST to reset password"})

    def post(self, request):
        email = request.data.get('email')
        new_password = request.data.get('new_password')

        if not email or not new_password:
            return Response({"success": False, "message": "Email and password required"})

        # Save password (demo only)
        PASSWORD_STORE[email] = new_password
        return Response({"success": True, "message": "Password reset successful"})

class CustomerListCreateAPIView(APIView):
    def get(self, request):
        customers = Customer.objects.all()   # ✅ FIXED queryset
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomerDetailsAPIView(APIView):
    def get(self, request, customer_id):
        try:
            customer = Customer.objects.get(customer_id=customer_id)
            serializer = CustomerSerializer(customer)
            return Response(serializer.data)
        except Customer.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        

class CustomerUpdateAPIView(APIView):
    def put(self, request, customer_id):
        try:
            customer = Customer.objects.get(customer_id=customer_id)
            serializer = CustomerSerializer(customer, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Customer.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        

class CustomerDeleteAPIView(APIView):
    def delete(self, request, customer_id):
        try:
            customer = Customer.objects.get(customer_id=customer_id)
            customer.delete()
            return Response({"message": "Customer deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
        except Customer.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class RegisterCustomer(APIView):
    def post(self, request):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            customer = serializer.save()
            # Return customer data (exclude password automatically because it's write_only in serializer)
            return Response(
                {
                    "message": "Customer registered successfully",
                    "customer": CustomerSerializer(customer).data
                },
                status=status.HTTP_201_CREATED
            )
       
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# views.py


@csrf_exempt
def login_api(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            form = LoginForm(data)

            if form.is_valid():
                email = form.cleaned_data['email']
                password = form.cleaned_data['password']

                try:
                    user = Customer.objects.get(email=email)

                    # ✅ Check hashed password
                    if check_password(password, user.password):
                        return JsonResponse({
                            "status": "success",
                            "message": "Login successful",
                            "user": {
                                "id": user.customer_id,
                                "name": user.name,
                                "email": user.email,
                                "phone": user.phone,
                                "address": user.address
                            }
                        })
                    else:
                        return JsonResponse({"status": "error", "message": "Invalid password"}, status=401)

                except Customer.DoesNotExist:
                    return JsonResponse({"status": "error", "message": "User not found"}, status=404)
            else:
                return JsonResponse({"status": "error", "message": "Invalid form data"}, status=400)

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)

    return JsonResponse({"status": "error", "message": "Only POST method allowed"}, status=405)


@csrf_exempt
def user_profile(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            customer_id = data.get("customer_id")

            if not customer_id:
                return JsonResponse({"status": "error", "message": "customer_id required"}, status=400)

            user = Customer.objects.get(customer_id=customer_id)
            return JsonResponse({
                "status": "success",
                "user": {
                    "id": user.customer_id,
                    "name": user.name,
                    "email": user.email,
                    "phone": user.phone,
                    "address": user.address
                }
            })
        except Customer.DoesNotExist:
            return JsonResponse({"status": "error", "message": "User not found"}, status=404)

    return JsonResponse({"status": "error", "message": "Only POST method allowed"}, status=405)




class OrderAPIView(APIView):
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            order = serializer.save()
            customer_email = order.email  # ⚡ ab ye milega

            subject = "Your Order Confirmation"
            message = f"""
            Dear {order.customer_name},

            Thank you for your order!

            Order ID: {order.id}
            Book: {order.book['title']}
            Author: {order.book['author']}
            Price: {order.book['price']}

            We will notify you once it is shipped.

            Regards,
            Book Store Team
            """

            # Email send
            send_mail(
                subject,
                message,
                from_email="noreply@shop.com",
                recipient_list=[customer_email],
                fail_silently=False,
            )

            return Response(
                {"success": True, "data": serializer.data},
                status=status.HTTP_201_CREATED
            )

        return Response(
            {"success": False, "errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
