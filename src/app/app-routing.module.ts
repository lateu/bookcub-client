import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './component/club/club.component';
import { ListClubsComponent } from './component/list-clubs/list-clubs.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ClubDetailsComponent } from './component/club-details/club-details.component';
import { MessageFormComponent } from './component/message-form/message-form.component';
import { ListMessagesComponent } from './component/list-messages/list-messages.component';
import { ListJournalsComponent } from './component/list-journals/list-journals.component';
import { JournalFormComponent } from './component/journal-form/journal-form.component';

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
    path:'journals',component:ListJournalsComponent
  },
  

  {
    path:'addJournal',component:JournalFormComponent
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
