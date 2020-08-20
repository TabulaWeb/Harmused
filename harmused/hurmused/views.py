from django.shortcuts import render, get_object_or_404
from .models import Musik


def musik_list(request):
    musik_posts = Musik.published.all()
    return render(request, 'index.html', {'musik_posts': musik_posts})

def musik_detail(request, year, month, day, musiks):
    musiks = get_object_or_404(Musik, slug=musiks, status='published', publish__year=year, publish__month=month, publish__day=day)
    return render(request, 'musik_detail.html', {'musiks': musiks})
