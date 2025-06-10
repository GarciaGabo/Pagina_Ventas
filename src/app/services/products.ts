import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Lamborghini_Revuelto',
      descripcion : 'Ideal para ciudad',
      precio: 6500,
      imagen: '/img/Lamborghini_Revuelto.jpg'
    },
    {
      id: 2,
      nombre: 'Ferrari la Ferrari',
      descripcion: 'Potente y elegante',
      precio: 9200,
      imagen: '/img/FERRARI-LaFerrari.jpeg'
    },
    {
      id: 3,
      nombre: 'Tesla Model 3',
      descripcion: 'Moderna y económica',
      precio: 3900,
      imagen: '/img/Tesla_model3.jpg'
    },
   {
      id: 4,
      nombre: 'Toyota Mirai Prices',
      descripcion: 'Moderna y económica',
      precio: 13900,
      imagen: '/img/Toyota_Mirai_Prices.jpg'
   }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
