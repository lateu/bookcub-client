import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {ClubComponent} from '../app/component/club/club.component';
import{ HeaderComponent} from '../app/component/header/header.component';
import { RegisterComponent } from '../app/component/register/register.component';
import { NewEntryComponent } from './component/new-entry/new-entry.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import{MessageEditorComponent} from './component/message-editor/message-editor.component';
import { ListClubsComponent } from './component/list-clubs/list-clubs.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ClubDetailsComponent } from './component/club-details/club-details.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    ListClubsComponent,
    WelcomeComponent,
    ClubDetailsComponent,
   
  
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
    NewEntryComponent,
    ClubComponent,
    MessageEditorComponent
    
 
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
