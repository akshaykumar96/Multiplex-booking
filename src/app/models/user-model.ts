export class UserModel {

    
    fullName: string;
    userName: string;
    email:string;
    phone: string;
    password: string;

    constructor(fName,uName,email,phone,pass){
        this.fullName=fName;
        this.userName=uName;
        this.email=email;
        this.phone=phone;
        this.password=pass;
    
}

}