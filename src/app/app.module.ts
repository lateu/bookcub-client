import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {ClubComponent} from '../app/component/club/club.component';
import{ HeaderComponent} from '../app/component/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListClubsComponent } from './component/list-clubs/list-clubs.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ClubDetailsComponent } from './component/club-details/club-details.component'
import { ListMessagesComponent } from './component/list-messages/list-messages.component';
import { MessageFormComponent } from './component/message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListClubsComponent,
    WelcomeComponent,
    ClubDetailsComponent,
    ListMessagesComponent,
   
  
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ClubComponent,
  
    
 
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
