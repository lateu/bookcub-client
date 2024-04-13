import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormControl, FormsModule } from '@angular/forms';

import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, FormsModule],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.css',
  providers: [MessageService]
})
export class MessageFormComponent implements OnInit {
public mode = 'Add'; //default mode
private id: any; //student ID
private message: any

  //initialize the call using StudentService 
constructor(private Service: MessageService, private router:Router, public route: ActivatedRoute) { }

ngOnInit(){
  this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id')) {
         this.mode = 'Edit'; /*request had a parameter _id */ 
         this.id = paramMap.get('_id');
        
         //request student info based on the id
         this.Service.getMessage(this.id).subscribe({
          next: (data => {
              //read data and assign to private variable student
              this.message = data;
              //populate the firstName, lastName and yourMessage on the page
              this.messageForm.patchValue({
                  firstName: this.message.firstName,
                  lastName: this.message.lastName,
                  yourMessage: this.message.yourMessage
              })
          }),

          error: (err => console.error(err)),
          complete: (() => console.log('finished loading'))
      });
      }
      else {
        this.mode = 'Add';
        this.id = null;
      }
  });
}
  messageForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    tileofMessage: new FormControl(''),
    yourMessage: new FormControl('')
  });

  onSubmit(){
    let firstName = this.messageForm.get('firstName')?.value ?? "";
    let lastName = this.messageForm.get('lastName')?.value!;
    let yourMessage = this.messageForm.get('yourMessage')?.value ?? "";
    console.log("You submitted: " + firstName + " " + lastName +  yourMessage,);
    

   if (this.mode == 'Add')
     this.Service.addMessages (firstName, lastName, yourMessage);
   if (this.mode == 'Edit')
     this.Service.updateMessage (this.id, firstName, lastName, yourMessage);
    
    this.router.navigate(['/listMessges']);
 }
}
