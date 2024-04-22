import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import { NgFor } from '@angular/common';
import { JournalFormComponent } from "../journal-form/journal-form.component";
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-list-journals',
    standalone: true,
    templateUrl: './list-journals.component.html',
    styleUrl: './list-journals.component.css',
    providers: [JournalService],
    imports: [NgFor, JournalFormComponent, RouterOutlet, CommonModule, HttpClientModule]
})
export class ListJournalsComponent implements OnInit{
title = 'Journal'
  public journals: any;
i: any;
  //initialize the call using JournalService 
  constructor(private service: JournalService,private router:Router) { }

  ngOnInit(): void {
    this.service.getJournals()
    .subscribe(
      data=>{
      this.journals=data;           
      },
      error=>{console.error();
      }
      )
  }

  //method called OnInit
  getJournals() {
    this.service.getJournals().subscribe({
      //read data and assign to public variable journals
      next: (data => { this.journals = data }),
      error: (err => console.error(err)),
      complete: (() => console.log('finished loading'))
    });
    }
    goToaddJournal(){
     
      return this.router.navigate(['addJournal']);

    }
  
        
}
