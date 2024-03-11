import { Component } from '@angular/core';
import { JsonPipe, NgFor } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, FormArray, FormsModule } from '@angular/forms';
import { GoogleApiService } from '../../services/google-api.service';
import { BookClub, book } from '../../models/bookClub';
@Component({
  selector: 'app-club',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgFor, FormsModule],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent {
  googleBooks: any;
  booksRetrieved: any;
  profileForm = this.formBuilder.group({
    bookName: ['', Validators.required],
    bookSelected: [''],
    //itemSelected:[''],
    BookClubDescription: [''],
  });

  bookToAdd: book = {
    isbn: "",
    title: "",
    author: "",
    categoryId: '',
    category: null,
    imageUrl: ''
  };

  newbookClub: BookClub = {
    bookClubId: 0,
    name: "",
    description: "",
    ISBN: "",
    email: "",
    img: "",
    book: null,

  }


  show: boolean = false;

  constructor(private formBuilder: FormBuilder, private googleApi: GoogleApiService) { }


  // API call to get the books list
  BookSearch(key_word: string) {
    this.googleApi.GetGoogleBooks(key_word)
      .subscribe((data: any) => {
        //console.log(data);
        this.googleBooks = data.items;
        // console.log(this.googleBooks);
      })
  }

  //Display the image of the book selected
  DisplayBookSelected(selectedItemValue?: string) {
    //let isbn = this.selected
    let currentIsbn = this.profileForm.get('bookSelected')!.value;

    this.googleApi.GetBookByISBN(selectedItemValue!).subscribe((data: any) => {

      //this.googleBooks = data.items;
      this.booksRetrieved = data.items;
      //console.log(data.items);
      //console.log(this.booksRetrieved);
      var imgsrc = this.booksRetrieved[0].volumeInfo.imageLinks.smallThumbnail
      this.show = true;

      var title = document.getElementById("selection-title");
      title?.remove()

      var div = document.getElementById("selection-div");
      div?.remove()


      var bookNode = document.getElementById("selectednodeId");
      var newimg = document.createElement('img');

      newimg.src = imgsrc
      newimg.id = "bookid"
      bookNode?.appendChild(newimg)
    })

    console.log("DisplayBookSelected");
    //console.log(selectedItemValue);
    //console.log(selectedItemValue);
    //console.log(this.booksRetrieved);



  }

}
