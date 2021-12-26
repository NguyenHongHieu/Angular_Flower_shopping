export class User{
  public id : number;
  public name : string;
  public username : string;
  public password : string;
  public phone : string;
  public isOwner : boolean;

  public constructor(init?: Partial<User>) {
		Object.assign(this, init);
	}
}
