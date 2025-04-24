from django.urls import path
from .views import company_list, company_detail, company_vacancies, vacancy_list, vacancy_detail, top_ten_vacancies, CompanyDetailAPIView, VacancyDetailAPIView

urlpatterns = [
    path('companies/', company_list, name='company-list'),
    path('companies/<int:id>/', company_detail, name='company-detail'),
    path('companies/<int:id>/vacancies/', company_vacancies, name='company-vacancies'),
    path('vacancies/', vacancy_list, name='vacancy-list'),
    path('vacancies/<int:id>/', vacancy_detail, name='vacancy-detail'),
    path('vacancies/top_ten/', top_ten_vacancies, name='top-ten-vacancies'),
    path('cbv/companies/<int:id>/', CompanyDetailAPIView.as_view(), name='company_cbv_detail'),
    path('cbv/vacancies/<int:id>/', VacancyDetailAPIView.as_view(), name='vacancy_cbv_detail'),

]
