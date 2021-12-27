export class UserModel {
  public id: number;
  public name: string;
  public username: string;
  public password: string;
  public phone: string;
  public isOwner: boolean;

  public constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }
}
