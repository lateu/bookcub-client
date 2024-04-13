import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css'
})
export class ListMessagesComponent {

  public messages: any;
  //initialize the call using StudentService 
  constructor(private service: MessageService) { }

  ngOnInit(): void {
    this.service.getMessages()
    .subscribe(
      data=>{
      this.messages=data;           
      },
      error=>{console.error();
      }
      )
  }

  //method called OnInit
  getMessages() {
    this.service.getMessages().subscribe({
      //read data and assign to public variable messages
      next: (data => { this.messages = data }),
      error: (err => console.error(err)),
      complete: (() => console.log('finished loading'))
    });
    }

  
        
}
