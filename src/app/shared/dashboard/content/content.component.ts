import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/list';

@Component({
  selector: 'app-content',
  imports: [MatIconModule, MatCardModule, MatDivider],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  @Input() pageTitle: string = '';
  @Input() sectionTitle: string = '';
  @Input() sectionDescription: string = '';

  onCreate() {}
}
