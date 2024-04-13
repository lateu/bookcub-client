import { Component } from '@angular/core';
import { JsonPipe, NgFor } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, FormArray, FormsModule } from '@angular/forms';
import { GoogleApiService } from '../../services/google-api.service';
import { BookClub } from '../../models/bookClub';
import { ClubService } from '../../services/club.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  //bookName:any;
  clubForm = this.formBuilder.group({
    bookName: ['', Validators.required],
    bookSelected: [''],
    query:[''],
    description: [''],
  });

  /*club: BookClub = {
    _id: "0",
    bookname: "",
    description: "",
    ISBN: "",
    imageurl: "",
    author:"",
  }*/

  public mode='Add'; //default
  public show: boolean = false;
  private id:any;
  private club:any;


  constructor(private formBuilder: FormBuilder, private googleApi: GoogleApiService, private clubService: ClubService,private router:Router,public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('_id')) {
            this.mode = 'Edit'; /*request had a parameter _id */
            this.id = paramMap.get('_id');

           
            this.clubService.getClubById(this.id).subscribe({
                next: (data => {
                    
                    this.club = data;
                    this.clubForm.patchValue({
                      description: this.club.description,
                      bookName: this.club.bookName,
                      bookSelected: this.club.bookSelected,
                      query:this.club.keyword
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
    //let currentIsbn = this.clubForm.get('bookSelected')!.value;
    //console.log(currentIsbn);

    if(this.mode=='Add'){

    

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

  }
    
    //console.log(selectedItemValue);
    //console.log(this.booksRetrieved);

  }

  AddOrEditclub(){
    let isbn=this.clubForm.get("bookSelected")?.value!;

  

  

    this.googleApi.GetBookByISBN(isbn).subscribe((data: any) => {

      //this.googleBooks = data.items;
      this.booksRetrieved = data.items;
     
      let description:string=this.clubForm.get("description")?.value!;

      if(this.mode=="Add"){
        let bookname:string=this.booksRetrieved[0].volumeInfo.title;
        let imageurl=this.booksRetrieved[0].volumeInfo.imageLinks.smallThumbnail;

      this.clubService.addClub(description,bookname, isbn,imageurl,this.clubForm.get('query')?.value!);
    }else{
      console.log("*************************************UPDATE REQUEST********************************************")
      console.log(this.id)
      this.clubService.updateClub(this.id,this.clubForm.get("description")?.value!);
      
    }
      
      //var imgsrc = this.booksRetrieved[0].volumeInfo.imageLinks.smallThumbnail
    })
 

    this.router.navigate(['/list-clubs']);

    
    
    //console.log(this.bookName)
    //console.log(this.profileForm.value)
  }

}
