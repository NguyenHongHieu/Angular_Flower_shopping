export class FlowerModel {
  public id: number;
  public name: string;
  public price: number;
  public img: string;
  public stock: number;
  public quantity: number = 0;//define for UI product detail
  public description: string;// define for UI product detail

  constructor(id: number, name: string, price: number, stock: number, img: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.stock = stock;
  }

}
