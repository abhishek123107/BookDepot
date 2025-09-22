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
    book = BookSerializer()
    customer_name = serializers.CharField()
    email = serializers.EmailField()   # ⚡ add this
    address = serializers.CharField()
    state = serializers.CharField()
    district = serializers.CharField()
    pin = serializers.CharField()
    landmark = serializers.CharField(required=False, allow_blank=True)
    phone = serializers.CharField()


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
    password = serializers.CharField(max_length=200)
    phone = serializers.CharField(required=True)
    address = serializers.CharField(required=True, max_length=200)

    def create(self, validated_data):   # ✅ अब यह सही जगह है
        validated_data["password"] = make_password(validated_data["password"])
        try:
            customer = Customer(**validated_data)
            customer.save()
            return customer
        except NotUniqueError as e:
            print("❌ NotUniqueError:", str(e))   # debugging
            raise serializers.ValidationError({"error": str(e)})
        

