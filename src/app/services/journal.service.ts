import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
  })

export class JournalService {

    constructor(private http: HttpClient) { }

    //Uses http.get() to load data 
    getJournals() {
        return this.http.get('http://localhost:8000/journals/');
    }


    deleteJournal(journalId: string) {
        throw new Error('Method not implemented.');
    }


    //Uses http.get() to request data based on Journal id 
    getjournal(journalId: string) {
        return this.http.get('http://localhost:8000/journals/' + journalId);
    }

    updateJournal(journalId: string, firstName: string, lastName: string, journal: string) {
        //request path http://localhost:8000/journals
        //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/journals/" +
            journalId, { firstName, lastName, journal })
            .subscribe(() => {
                console.log('Updated: ' + journalId);
            });
    }
    //Uses http.post() to post data 
    addJournals(firstName: string, lastName: string, bookTitle: string, Date: string, journalEntry: string) {
        this.http.post('http://localhost:8000/journals', { firstName, lastName, bookTitle, Date, journalEntry })
            .subscribe((responseData) => {
                console.log(responseData);
            });
               location.reload(); 
    }
}