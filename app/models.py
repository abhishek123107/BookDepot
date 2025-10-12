import mongoengine as me
from  django import forms
from djongo import models
from django.utils import timezone
from datetime import timedelta

# Counter collection for generating sequences
class LoginForm(forms.Form):
    email = forms.EmailField(required=True)
    password = forms.CharField(widget=forms.PasswordInput, required=True)


class Counter(me.Document):
    name = me.StringField(required=True, unique=True)
    value = me.IntField(default=0)

def get_next_customer_id():
    counter = Counter.objects(name="customer_id").modify(
        upsert=True, new=True, inc__value=1
    )
    return counter.value


# Customer collection
class Customer(me.Document):
    meta = {
        'collection': 'customers',
        'indexes': ['customer_id']
    }

    customer_id = me.IntField(unique=True, default=get_next_customer_id)  # ✅ fixed
    name = me.StringField(max_length=100, required=True)
    email = me.EmailField(required=True )
    password = me.StringField(max_length=200)
    phone = me.StringField(required=True)
    address = me.StringField(required=True, max_length=200)
    role = me.StringField(default='user', choices=['user', 'admin'])
    reset_token = me.StringField()  # For password reset







class Customer_password(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    otp = models.CharField(max_length=6, blank=True, null=True)
    otp_expiry = models.DateTimeField(blank=True, null=True)

    def set_otp(self, otp):
        self.otp = otp
        self.otp_expiry = timezone.now() + timedelta(minutes=5)  # 5 min valid
        self.save()

    def verify_otp(self, otp):
        return self.otp == otp and self.otp_expiry and timezone.now() <= self.otp_expiry


# models.py

class Book(me.Document):
    title = me.StringField(max_length=200)
    author = me.StringField(max_length=200)
    price = me.FloatField()

    def __str__(self):
        return self.title




class Order(me.Document):
    book = me.DictField()
    customer_name = me.StringField(max_length=200)
    email = me.EmailField(required=True)
    address = me.StringField()
    state = me.StringField(max_length=100)
    district = me.StringField(max_length=100)
    pin = me.StringField(max_length=20)
    landmark = me.StringField(max_length=200, blank=True, null=True)
    phone = me.StringField(max_length=15)
    status = me.StringField(max_length=20, default="confirmed", choices=["confirmed", "tracking", "cancelled", "delivered"])
    created_at = me.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.customer_name} - {self.book.get('title', '')}"
