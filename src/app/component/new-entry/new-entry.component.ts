import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-entry',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-entry.component.html',
  styleUrl: './new-entry.component.css'
})
export class NewEntryComponent {
  name = new FormControl('')
}
