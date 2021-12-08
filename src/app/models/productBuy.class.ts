export class ProductBuy{
  private _id :number;
  private _quantity : number;
  constructor(id: number, quantity: number){
      this._id = id;
      this._quantity = quantity
  }

  get id(){
    return this._id;
  }

  get quantity(){
    return this._quantity;
  }

  set quantity(value){
    this._quantity = value;
  }

  increaseQuantity(){
    this._quantity += 1;
  }
  decreaseQuantity(){
    this._quantity += 1;
  }
}
