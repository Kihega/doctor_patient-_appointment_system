from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
#Custom User Model
class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('doctor', 'Doctor'),
        ('receptionist', 'Receptionist'),
    )
    
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

#Doctor user model
class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    specialization = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username
#Appointment Model
class Appointment(models.Model):
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='patient_appointments')
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    appointment_date = models.DateTimeField()
    status = models.CharField(max_length=20, default='scheduled')

    def __str__(self):
        return f"{self.patient} - {self.doctor}"


#
