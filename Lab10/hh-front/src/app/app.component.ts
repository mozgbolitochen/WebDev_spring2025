import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, CompanyListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hh-front';
}
