import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from 'src/app/services/api.service';
import { Vacancy } from 'src/app/models/vacancy';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.scss',
})
export class VacancyListComponent implements OnChanges {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private apiService: ApiService) {}

  ngOnChanges(): void {
    if (this.companyId) {
      this.apiService.getVacanciesByCompany(this.companyId).subscribe(data => {
        this.vacancies = data;
      });
    }
  }
}
