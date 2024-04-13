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
      },
      error=>{console.error();
      }
      )
  }

  ShowClubdetails(id:string){
   // console.log("----------------ShowClubdetails-----------")
     // console.log(id)
    return this.router.navigate(['clubdetail'],{ queryParams: { "_id": id } });
  }

  AddclubRedirect(){
    return this.router.navigate(['add-club']);

  }

  onDelete(id: string) {
    this.clubService.deleteClub(id);
}
      
}
