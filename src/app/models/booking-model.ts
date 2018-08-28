export class BookingModel {
    id:number;
    movieFirstName:string
    movieSecondName:number;
    details:string;
    ratings:string;
    showtimings:string;
    type:string;
    cast:string;
   
    constructor( id, movieFirstName,  movieSecondName,  details,  ratings,
     showTimings, type,  cast) {
    
    this.id = id;
    this.movieFirstName = movieFirstName;
    this.movieSecondName = movieSecondName;
    this.details = details;
    this.ratings = ratings;
    this.showtimings = showTimings;
    this.type = type;
    this.cast = cast;
} 

    // constructor(pId,pName,price,stock){
    //     this.id=pId;
    //     this.movieFirstName=pName;
    //     this.movieSecondName=price;
    //     this.unitsInStock=stock;
        
    // }
}


