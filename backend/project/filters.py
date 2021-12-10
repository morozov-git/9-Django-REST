from django_filters import rest_framework as filters
from .models import Project


class ProjectFilter(filters.FilterSet):
	name = filters.CharFilter(lookup_expr='contains')
	id = filters.OrderingFilter(lookup_expr='contains')
	description_project = filters.CharFilter(lookup_expr='contains')

	class Meta:
		model = Project
		fields = ['id', 'name', 'description_project']