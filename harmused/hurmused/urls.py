from django.urls import path
from . import views 

app_name = 'musik'

urlpatterns = [
 # post views
 path('', views.musik_list, name='musik_list'),
 path('<int:year>/<int:month>/<int:day>/<slug:musik>/', views.musik_detail, name='musik_detail'),
]