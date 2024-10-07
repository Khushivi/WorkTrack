from django.db import models

# Create your models here.
class ActivityLog(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    description = models.TextField()

    def __str__(self):
        return f"{self.timestamp}: {self.description}"
