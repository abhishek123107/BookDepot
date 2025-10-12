# Add POST API to fetch order by ID
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def get_order_by_id(request):
    order_id = request.data.get('order_id')
    if not order_id:
        return Response({'success': False, 'message': 'order_id required'}, status=400)
    try:
        order = Order.objects.get(id=order_id)
        serializer = OrderSerializer(order)
        return Response({'success': True, 'order': serializer.data})
    except Order.DoesNotExist:
        return Response({'success': False, 'message': 'Order not found'}, status=404)

import email
import sys
import random
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import serializers as drf_serializers
from mongoengine.errors import NotUniqueError
from rest_framework.response import Response
from rest_framework import status
from app.models import Customer, LoginForm, Order, Book  
from app.serializers import CustomerSerializer, OrderSerializer
from mongoengine import Document, fields
from rest_framework.decorators import api_view

# --- Customer Orders API ---
class CustomerOrdersView(APIView):
    def post(self, request):
        customer_email = request.data.get('email')
        if not customer_email:
            return Response({'success': False, 'message': 'Email required'}, status=400)
        orders = Order.objects(email=customer_email)
        serializer = OrderSerializer(orders, many=True)
        return Response({'success': True, 'orders': serializer.data})

@api_view(['POST'])
def update_order_status(request):
    print('DEBUG update_order_status request.data:', request.data)  # Debug print
    order_id = request.data.get('order_id')
    status_val = request.data.get('status')
    if not order_id or not status_val:
        return Response({'success': False, 'message': 'order_id and status required'}, status=400)
    try:
        order = Order.objects.get(id=order_id)
        order.status = status_val
        order.save()
        return Response({'success': True, 'message': 'Order status updated'})
    except Order.DoesNotExist:
        return Response({'success': False, 'message': 'Order not found'}, status=404)


@api_view(['POST'])
def update_order_address(request):
    """Update the address for an order. Expects JSON: { order_id, address }"""
    print('DEBUG update_order_address request.data:', request.data)
    order_id = request.data.get('order_id')
    new_address = request.data.get('address')
    if not order_id or new_address is None:
        return Response({'success': False, 'message': 'order_id and address required'}, status=400)

    try:
        order = Order.objects.get(id=order_id)
        order.address = new_address
        order.save()
        return Response({'success': True, 'message': 'Order address updated'})
    except Order.DoesNotExist:
        return Response({'success': False, 'message': 'Order not found'}, status=404)
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

# Dummy /pay/ endpoint for payment integration
@csrf_exempt
def pay(request):
    if request.method == 'POST':
        # Simulate payment processing
        return JsonResponse({'status': 'success', 'message': 'Payment processed.'})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method.'}, status=400)

class SendOtpView(APIView):
    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({"success": False, "message": "Email required"})
        
        otp = generate_otp()
        OTP_STORE[email] = otp
        print(f"OTP for {email} is {otp}")  # For testing, prints OTP to console

        # Send OTP via email
        subject = "Your OTP for BookDepot Password Reset"
        message = f"Your OTP is: {otp}\nUse this to reset your password."
        send_mail(
            subject,
            message,
            "noreply@bookdepot.com",
            [email],
            fail_silently=False,
        )

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
from rest_framework import status

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


class AllOrdersAPIView(APIView):
    def get(self, request):
        try:
            orders = Order.objects.order_by('-created_at')
        except Exception as e:
            print('ERROR fetching orders:', str(e))
            return Response({'success': False, 'message': 'Error fetching orders'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        serializer = OrderSerializer(orders, many=True)
        return Response({'success': True, 'orders': serializer.data})

    def post(self, request):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_books_count(request):
    """Return count of Book documents."""
    try:
        count = Book.objects.count()
        return Response({'success': True, 'count': count})
    except Exception as e:
        print('ERROR get_books_count:', str(e))
        return Response({'success': False, 'message': 'Error fetching book count'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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
        print('DEBUG RegisterCustomer request.data:', request.data)
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            try:
                customer = serializer.save()
            except NotUniqueError as e:
                # Duplicate unique key in DB (e.g., name or email)
                print('DUPLICATE KEY ERROR saving customer:', str(e))
                # Try to extract key info from message
                msg = 'A record with the same unique field already exists.'
                try:
                    # e.args may contain detailed info
                    msg = str(e)
                except Exception:
                    pass
                return Response({"success": False, "message": msg}, status=status.HTTP_400_BAD_REQUEST)
            except drf_serializers.ValidationError as e:
                # Raised by serializer.create when we re-raise validation errors
                print('SERIALIZER ValidationError saving customer:', e.detail if hasattr(e, 'detail') else str(e))
                return Response({"success": False, "errors": e.detail if hasattr(e, 'detail') else str(e)}, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                print('ERROR saving customer:', str(e))
                return Response({"success": False, "message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            # Return customer data (exclude password automatically because it's write_only in serializer)
            return Response(
                {
                    "success": True,
                    "message": "Customer registered successfully",
                    "customer": CustomerSerializer(customer).data
                },
                status=status.HTTP_201_CREATED
            )

        # Validation failed — print errors to server log and return helpful payload
        print('DEBUG RegisterCustomer serializer.errors:', serializer.errors)
        return Response({"success": False, "errors": serializer.errors, "data_received": request.data}, status=status.HTTP_400_BAD_REQUEST)

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
                        # Determine role (demo): treat a specific email as admin
                        admin_email = "admin@bookdepot.com"
                        role = 'admin' if user.email == admin_email else 'user'
                        return JsonResponse({
                            "status": "success",
                            "message": "Login successful",
                            "user": {
                                "id": user.customer_id,
                                "name": user.name,
                                "email": user.email,
                                "phone": user.phone,
                                "address": user.address,
                                "role": role
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
