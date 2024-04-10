import { Component } from '@angular/core';
import { JsonPipe, NgFor } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, FormArray, FormsModule } from '@angular/forms';
import { GoogleApiService } from '../../services/google-api.service';
import { BookClub } from '../../models/bookClub';
import { ClubService } from '../../services/club.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-club',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgFor, FormsModule],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent{
  googleBooks: any;
  booksRetrieved: any;
  bookName:any;
  profileForm = this.formBuilder.group({
    bookName: ['', Validators.required],
    bookSelected: [''],
    query:[''],
    description: [''],
  });

  club: BookClub = {
    _id: 0,
    bookname: "",
    description: "",
    ISBN: "",
    imageurl: "",
    author:"",
  }


  show: boolean = false;


  constructor(private formBuilder: FormBuilder, private googleApi: GoogleApiService, private clubService: ClubService,private router:Router,public route: ActivatedRoute) { }

  //ngOnInit() {}


  // API call to get the books list
  BookSearch(key_word: string) {
    this.googleApi.GetGoogleBooks(key_word)
      .subscribe((data: any) => {
        //console.log(data.items);
        this.googleBooks = data.items;
        // console.log(this.googleBooks);
      })
  }

  //Display the image of the book selected
  DisplayBookSelected(selectedItemValue?: string) {
    //let isbn = this.selected
    let currentIsbn = this.profileForm.get('bookSelected')!.value;
    //console.log(currentIsbn);

    this.googleApi.GetBookByISBN(selectedItemValue!).subscribe((data: any) => {

      //this.googleBooks = data.items;
      this.booksRetrieved = data.items;
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


    
    //console.log(selectedItemValue);
    //console.log(this.booksRetrieved);

  }

  Addclub(){

    this.googleApi.GetBookByISBN(this.profileForm.get("bookSelected")?.value!).subscribe((data: any) => {

      //this.googleBooks = data.items;
      this.bookName = data.items;
      //console.log(this.bookName[0].volumeInfo.title);
      let bookname:string=this.bookName[0].volumeInfo.title;
      let description:string=this.profileForm.get("description")?.value!;
      let imageurl=this.bookName[0].volumeInfo.imageLinks.smallThumbnail

      this.clubService.addClub(description,bookname, imageurl);
      
      
      //var imgsrc = this.booksRetrieved[0].volumeInfo.imageLinks.smallThumbnail
    })

    this.router.navigate(['/list-clubs']);

    console.log("*********************************************************************************")
    
    //console.log(this.bookName)
    //console.log(this.profileForm.value)
  }

}
