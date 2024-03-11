import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

    API_KEY="AIzaSyAaGr0GfX74toZcZestWcM3vjB8yEkRRNE";
  
  constructor(private http: HttpClient) { }


//Search books using the users input parameters
  GetGoogleBooks(Search: string) {
    return this.http
      .get(`https://www.googleapis.com/books/v1/volumes?q=${Search}&maxResults=10&keyes&key=${this.API_KEY}`);
  }

  //get a book with a given isbn
  GetBookByISBN(isbn: string) {
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:"+isbn);
  }

 
}
