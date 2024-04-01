
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
        return this.http.get('http://localhost:8000/clubs');
    }

    //Add a new club
    addClub(description: string, bookname: string,imageurl:string) {
    this.http.post('http://localhost:8000/bookclub',{ description, bookname,imageurl })
        .subscribe((responseData) => {
            console.log(responseData);
        }); 

    // location.reload();
    }

    // delete a selected club
    deleteClub(clubId: string) {
        this.http.delete("http://localhost:8000/bookclub/" + clubId)
            .subscribe(() => {
                console.log('Deleted: ' + clubId);
            });

            location.reload();
    }

    // update club data
    updateClub(clubId: string,description: string, bookName: string) {
        this.http.put("http://localhost:8000/bookclub/" + 
        clubId,{ description, bookName })
        .subscribe(() => {
            console.log('Updated: ' + clubId);
        });
    }

    //get club by ID
    getClub(clubId: string) {
    return this.http.get('http://localhost:8000/bookclub/'+ clubId);
    }


    }