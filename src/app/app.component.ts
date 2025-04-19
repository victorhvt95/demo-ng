import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './shared/dashboard/aside/aside.component';
import { DashboardComponent } from './shared/dashboard/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsideComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'report-app';
}
