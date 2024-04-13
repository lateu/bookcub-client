import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
  })
export class MessageService {

    constructor(private http:HttpClient) {}

  getMessages() {
    return this.http.get('http://localhost:8000/messages/');
  }
  deleteMessage(messageId: string) {
    throw new Error('Method not implemented.');
  }



    //Uses http.get() to request data based on student id 
getMessage(messageId: string) {
    return this.http.get('http://localhost:8000/messages/'+ messageId);
}

    updateMessage(messageId: string,firstName: string, lastName: string, message: string) {
        //request path http://localhost:8000/messages/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/messages/" + 
        messageId,{ firstName, lastName, message })
        .subscribe(() => {
            console.log('Updated: ' + messageId);
        });
    }
    //Uses http.post() to post data 
addMessages(firstName: string, lastName: string, yourMessage: string) {
    this.http.post('http://localhost:8000/messages',{ firstName, lastName,yourMessage })
        .subscribe((responseData) => {
            console.log(responseData);
        });

    }
}