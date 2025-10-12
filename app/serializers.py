from rest_framework import serializers
from .models import Book, Customer
from mongoengine.errors import NotUniqueError
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from .models import Book, Order 


class BookSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=200)
    author = serializers.CharField(max_length=200)
    price = serializers.FloatField()



class OrderSerializer(serializers.Serializer):
    # Include the document id so clients can reference the order when updating
    id = serializers.CharField(read_only=True)
    book = BookSerializer()
    customer_name = serializers.CharField()
    email = serializers.EmailField()
    address = serializers.CharField()
    state = serializers.CharField()
    district = serializers.CharField()
    pin = serializers.CharField()
    landmark = serializers.CharField(required=False, allow_blank=True)
    phone = serializers.CharField()
    status = serializers.CharField(required=False, default="confirmed")


    def create(self, validated_data):
        book_data = validated_data.pop('book')

        # MongoEngine me get_or_create ka alternative
        book = Book.objects(title=book_data['title'], author=book_data['author']).first()
        if not book:
            book = Book(
                title=book_data['title'],
                author=book_data['author'],
                price=book_data['price']
            )
            book.save()

        # Order ke liye JSON dict
        book_json = {
            "title": book.title,
            "author": book.author,
            "price": book.price
        }

        # Order save
        order = Order(
            book=book_json,
            **validated_data
        )
        order.save()
        return order

        

class CustomerSerializer(serializers.Serializer):
    customer_id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True, max_length=100)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(max_length=200, write_only=True)
    phone = serializers.CharField(required=True)
    address = serializers.CharField(required=True, max_length=200)
    role = serializers.CharField(required=False, default='user')

    def validate_phone(self, value):
        # basic validation: phone must be digits and 10-15 chars
        if not value.isdigit():
            raise serializers.ValidationError('Phone must contain only digits')
        if len(value) < 7 or len(value) > 15:
            raise serializers.ValidationError('Phone must be between 7 and 15 digits')
        return value

    def validate_name(self, value):
        # prevent duplicate names (there is a unique index on name in the DB)
        existing = Customer.objects(name=value).first()
        if existing:
            raise serializers.ValidationError('A user with this name already exists')
        return value

    def validate_email(self, value):
        # optional: check for existing email
        existing = Customer.objects(email=value).first()
        if existing:
            raise serializers.ValidationError('A user with this email already exists')
        return value

    def create(self, validated_data):   # ✅ अब यह सही जगह है
        validated_data["password"] = make_password(validated_data["password"])
        try:
            # Ensure role defaults to 'user' if not provided
            if 'role' not in validated_data:
                validated_data['role'] = 'user'
            customer = Customer(**validated_data)
            customer.save()
            return customer
        except NotUniqueError as e:
            print("❌ NotUniqueError:", str(e))   # debugging
            raise serializers.ValidationError({"error": str(e)})
        

