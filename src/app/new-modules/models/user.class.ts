export class User{
  public id : number;
  public name : string;
  public username : string;
  public password : string;
  public phone : string;
  public isOwner : boolean;

  constructor(id: number,
    name: string,
    username : string,
    password : string,
    phone: string,
    isOwner : boolean) {

    this.id = id;
    this.name = name;
    this.phone = phone;
    this.isOwner = isOwner;
    this.username = username;
    this.password = password;
  }
}
