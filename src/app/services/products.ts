import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  informacion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {

  private products: Product[] = [
    {
      id: 1,
      nombre: 'Lamborghini Revuelto',
      descripcion: 'Ideal para ciudad',
      informacion: 'El Lamborghini Revuelto es un automóvil deportivo híbrido enchufable de motor central producido por el fabricante de automóviles italiano Lamborghini.',
      precio: 6500,
      imagen: '/img/Lamborghini_Revuelto.jpg'
    },
    {
      id: 2,
      nombre: 'Ferrari la Ferrari',
      descripcion: 'Potente y elegante',
      informacion: 'El LaFerrari es un coche de carretera con tecnología híbrida que combina un motor V12 de 800 CV y un motor eléctrico de 163 CV, para un rendimiento y una eficiencia récord.',
      precio: 9200,
      imagen: '/img/FERRARI-LaFerrari.jpeg'
    },
    {
      id: 3,
      nombre: 'Tesla Model 3',
      descripcion: 'Moderna y económica',
      informacion: 'Sedán eléctrico de batería de tamaño mediano presentado en 2017 y el automóvil eléctrico enchufable.',
      precio: 3900,
      imagen: '/img/Tesla_model3.jpg'
    },
    {
      id: 4,
      nombre: 'Toyota Mirai Prices',
      descripcion: 'Moderna y económica',
      informacion: 'Toyota está optimizando su línea de sedán Mirai y eliminando la versión Limited. El modelo ahora se ofrece exclusivamente en versión XLE, que gana nuevo equipamiento.',
      precio: 13900,
      imagen: '/img/Toyota_Mirai_Prices.jpg'
    }
  ]
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }
}
