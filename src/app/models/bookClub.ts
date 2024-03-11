export interface BookClub {
    bookClubId:number,
    name: string,
    description: string,
    ISBN: string,
    email: string,
    img: string,
    book: null,

}

export interface book{
    isbn:string,
    title:string,
    author:string,
    categoryId:string,
    category: null,
    imageUrl: string
}
    
