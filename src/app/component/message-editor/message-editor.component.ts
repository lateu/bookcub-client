import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-message-editor',
  standalone: true,
  templateUrl: './message-editor.component.html',
  styleUrl: './message-editor.component.css'
})
export class MessageEditorComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  profileForm = new FormGroup({
    message: new FormControl(''),
  });
}
