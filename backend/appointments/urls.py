from django.urls import path
from . import views
from .views import AdminOnlyView
urlpatterns = [
   #App routes
    path('admin-only/', AdminOnlyView.as_view(), name='admin-only'),
]

