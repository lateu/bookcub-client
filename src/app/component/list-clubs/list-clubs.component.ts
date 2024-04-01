import { Component } from '@angular/core';
import { ClubService } from '../../services/club.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clubs',
  templateUrl: './list-clubs.component.html',
  styleUrl: './list-clubs.component.css'
})
export class ListClubsComponent {
  public clubs:any;
  constructor(private clubService:ClubService,private router:Router) { }

   

  ngOnInit(): void {
    this.clubService.getClubs()
    .subscribe(
      data=>{
      this.clubs=data;
      console.log("---------------------------")
      console.log(this.clubs)
           
      },
      error=>{console.error();
      }
      )
  }

  ShowClubdetails(id:number, title:string){
    return this.router.navigate(['bookclubdetail'],{ queryParams: { "clubId": id,"BookClubTitle":title } });
  }
  AddclubRedirect(){
    return this.router.navigate(['add-club']);

  }
}
