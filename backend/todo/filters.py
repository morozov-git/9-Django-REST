from django_filters import rest_framework as filters
from .models import ToDo


class ToDoFilter(filters.FilterSet):
	name = filters.CharFilter(lookup_expr='contains')
	id = filters.OrderingFilter(lookup_expr='contains')
	description_todo = filters.CharFilter(lookup_expr='contains')

	class Meta:
		model = ToDo
		fields = ['id', 'name', 'description_todo']