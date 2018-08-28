export class ShortBookingModel {
    id:number;
    movieFirstName:string
    movieSecondName:number;
    details:string;
  
   
    constructor( id, movieFirstName,  movieSecondName,  details) {
    
    this.id = id;
    this.movieFirstName = movieFirstName;
    this.movieSecondName = movieSecondName;
    this.details = details;
   
} 
}
