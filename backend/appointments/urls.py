from django.urls import path
from .views import (
    CreateAppointmentView,
    AllAppointmentsView,
    DoctorAppointmentsView,
    UpdateAppointmentView,
    DeleteAppointmentView
)
#App routes
urlpatterns = [
    path('create/', CreateAppointmentView.as_view()),
    path('all/', AllAppointmentsView.as_view()),
    path('doctor/', DoctorAppointmentsView.as_view()),
    path('update/<int:pk>/', UpdateAppointmentView.as_view()),
    path('delete/<int:pk>/', DeleteAppointmentView.as_view()),
]
