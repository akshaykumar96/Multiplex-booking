export class SelectModel {
    
    noOfTickets:string;
    classs: string;
    timings:string;
    screen: string;
    shows: string;
    daate:Date;
    total:string;

    constructor(noOfTickets,classs,daate,screen,shows,total)
    {
        this.noOfTickets=noOfTickets;
        this.classs=classs;
        this.daate =daate;
        this.screen=screen;
        this.shows=shows;
       this.total=total;
    }
}
