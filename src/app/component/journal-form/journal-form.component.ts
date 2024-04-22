import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { JournalService } from '../../services/journal.service';
import { JsonPipe } from '@angular/common';
/*import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';*/



@Component({
  selector: 'app-journal-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, FormsModule],
  templateUrl: './journal-form.component.html',
  styleUrl: './journal-form.component.css',
  providers: [JournalService]
})
export class JournalFormComponent {
OnDelete(arg0: any) {
throw new Error('Method not implemented.');
}
  journalForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    bookTitle: new FormControl (''),
    Date: new FormControl(''),
    journalEntry: new FormControl('')
  })

  public mode = 'Add'; //default mode
  private id: any; //journal ID
  private journal: any
  name!: FormControl<any>;
 
 
  //initialize the call using JournalService 
constructor(private Service: JournalService, private router:Router, public route: ActivatedRoute) { }

ngOnInit(){
  this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id')) {
         this.mode = 'Edit'; /*request had a parameter _id */ 
         this.id = paramMap.get('_id');
        
         //request journal info based on the id
         this.Service.getjournal(this.id).subscribe({
          next: (data => {
              //read data and assign to private variable user
              this.journal = data;
              //populate the firstName, lastName and Entry on the page
              this.journalForm.patchValue({
                  firstName: this.journal.firstName,
                  lastName: this.journal.lastName,
                  bookTitle: this.journal.bookTitle,
                  Date: this.journal.Date,
                  journalEntry: this.journal.journalEntry
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


  onSubmit(){
    let firstName = this.journalForm.get('firstName')?.value ?? "";
    let lastName = this.journalForm.get('lastName')?.value!;
    let bookTitle = this.journalForm.get('bookTitle')?.value ?? '';
    let Date = this.journalForm.get('Date')?.value ?? '';
    let JournalEntry = this.journalForm.get('journalEntry')?.value ?? "";
    console.log("You submitted: " + firstName + " " + lastName + " " + bookTitle + " " + Date + " " + JournalEntry,);
  
    //this.Service.addJournals (firstName, lastName, bookTitle, Date, JournalEntry);

   if (this.mode == 'Add')
     this.Service.addJournals (firstName, lastName, bookTitle, Date, JournalEntry);
   if (this.mode == 'Edit')
     this.Service.updateJournal (this.id, firstName, lastName, JournalEntry);
    
    this.router.navigate(['/listJournals']);
   // this.router.navigate(['/addJournal']);

    }
 }

function onDelete(_journal_Id: any, _string: any) {
  throw new Error('Function not implemented.');
}

