
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { environment } from '../../environments/environment';


    @Injectable({
    providedIn: 'root'
    })
    export class ClubService {
    
    constructor(private http: HttpClient) { }


    //load club data 
    getClubs() {
        return this.http.get('http://localhost:8000/bookclubs');
    }

    //Add a new club
    addClub(description: string, bookname: string,isbn:string,imageurl:string,key_word:string) {
    this.http.post('http://localhost:8000/bookclub',{ description, bookname,isbn,imageurl,key_word })
        .subscribe((responseData) => {
            console.log(responseData);
        }); 

     location.reload();
    }

    // delete a selected club
    deleteClub(id: string) {
        this.http.delete("http://localhost:8000/bookclub/" + id)
            .subscribe(() => {
                console.log('Deleted: ' + id);
            });

            location.reload();
    }

    // update club data
    updateClub(id: string,description: string) {
        this.http.put("http://localhost:8000/bookclub/" + 
        id,{ description, })
        .subscribe(() => {
            console.log('Updated: ' + id);
        });
        location.reload();
    }

    //get club by ID
    getClubById(id: string) {
    return this.http.get('http://localhost:8000/bookclub/'+ id);
    }


    }