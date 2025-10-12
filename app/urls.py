from django.conf import settings
from django.urls import path,include
from app import admin
from app.views import CustomerListCreateAPIView, CustomerDetailsAPIView,CustomerDeleteAPIView,CustomerUpdateAPIView
from .views import RegisterCustomer, ResetPasswordView
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static
from . import views
from .views import OrderAPIView
from .views import SendOtpView
from .views import pay




urlpatterns = [
    path('customers/', CustomerListCreateAPIView.as_view(), name='customer-list-create'),
    path('customers/<int:customer_id>/', CustomerDetailsAPIView.as_view(), name='customer-details'),
    path('customers/<int:customer_id>/update/', CustomerUpdateAPIView.as_view(), name='customer-update'),
    path('customers/<int:customer_id>/delete/', CustomerDeleteAPIView.as_view(), name='customer-delete'),
    path('api/register/', RegisterCustomer.as_view(), name="register"),
    path("api/login/", views.login_api, name="login_api"),
    path("api/user/profile/", views.user_profile, name="user_profile"),
    path('send-otp/', SendOtpView.as_view(), name='send-otp'),
    path('verify-otp/', views.VerifyOtpView.as_view(), name='verify_otp'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),
    path("api/orders/", OrderAPIView.as_view(), name="order-create"),
    path("api/orders/all/", views.AllOrdersAPIView.as_view(), name="orders-all"),

    # New endpoints for customer orders and status update
    path("api/customer/orders/", views.CustomerOrdersView.as_view(), name="customer-orders"),
    path("api/order/update-status/", views.update_order_status, name="update-order-status"),
    path("api/order/update-address/", views.update_order_address, name="update-order-address"),
    path("api/order/get/", views.get_order_by_id, name="get-order-by-id"),
    path('pay/', pay, name='pay'),
    path('api/books/count/', views.get_books_count, name='books-count'),

]






