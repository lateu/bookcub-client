import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './component/club/club.component';
import { RegisterComponent } from './component/register/register.component';
import { NewEntryComponent } from './component/new-entry/new-entry.component';
import { ListClubsComponent } from './component/list-clubs/list-clubs.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ClubDetailsComponent } from './component/club-details/club-details.component';
import { MessageFormComponent } from './component/message-form/message-form.component';
import { ListMessagesComponent } from './component/list-messages/list-messages.component';

const routes: Routes = [
  {
    path:'', component:WelcomeComponent
  },
  {
    path:'add-club', component:ClubComponent
  },
  {
    path:'list-clubs', component:ListClubsComponent
  },
  {
    path: 'editClub/:_id',  component: ClubComponent
  },

  {
    path: 'clubdetail',  component: ClubDetailsComponent
  },
  {
    path:'registration',component:RegisterComponent
  },

  {
    path:'journal',component:NewEntryComponent
  },
  
   {
    path: 'addMessage',  
    component: MessageFormComponent
},  {
    path: 'editMessage/:_id', 
    component: MessageFormComponent 
},
    {
    path: 'listMessges',  
    component: ListMessagesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
