import { Component } from '@angular/core';
import { ClubService } from '../../services/club.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookClub } from '../../models/bookClub';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrl: './club-details.component.css'
})
export class ClubDetailsComponent {
  public bookclubs:any;
 club: BookClub= {
    _id:"0",
    bookname: "",
    description: "",
    ISBN: "",
    imageurl: "",
    author:"",
   
  }

  constructor(private clubService:ClubService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.queryParams['_id']
    
    this.clubService.getClubById(id).subscribe({
      next: (data => {
          this.bookclubs=data;
          this.club.bookname=this.bookclubs.bookname
          this.club.description=this.bookclubs.description
          this.club.imageurl=this.bookclubs.imageurl
          this.club.author=this.bookclubs.author
          this.club._id=id
      }),
      

      error: (err => console.error(err)),
      complete: (() => console.log('finished loading'))
  });

  console.log("---------------------------------")
  console.log( this.bookclubs)
  }




  /*

  AddClubPost(id:string){
    return this.router.navigate(['AddClubPost'],{ queryParams: { "_id": id} });

  }

  ViewClubPost(id:string){
    return this.router.navigate(['Viewclubpost'],{ queryParams: { "_id": id } });

  }*/

  

}
