import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Company } from 'src/app/models/company';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule], 
  templateUrl: './company-list.component.html', 
  styleUrl: './company-list.component.scss', 
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
    });
  }

  selectCompany(id: number): void {
    this.selectedCompanyId = id;
  }
}
