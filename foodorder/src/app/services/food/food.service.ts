import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imgUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },

      {
        id: 2,
        name: 'Meatballs',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east'],
        stars: 4.7,
        imgUrl: '/assets/food-2.jpg',
        tags: ['Slowfood', 'Lunch']
      },

      {
        id: 3,
        name: 'Hamburguer',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imgUrl: '/assets/food-3.jpg',
        tags: ['Fastfood', 'Hamburguer']
      },

      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imgUrl: '/assets/food-4.jpg',
        tags: ['Fastfood', 'Fried']
      },

      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imgUrl: '/assets/food-5.jpg',
        tags: ['Slowfood', 'Soup']
      },

      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imgUrl: '/assets/food-6.jpg',
        tags: ['Fastfood', 'Pizza', 'Lunch']
      },

      {
        id: 7,
        name: 'Vegetables Spicy Pizza',
        price: 10,
        cookTime: '20-50',
        favorite: false,
        origins: ['india'],
        stars: 4.0,
        imgUrl: '/assets/food-7.jpg',
        tags: ['Fastfood', 'Pizza', 'Lunch']
      },

      {
        id: 8,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imgUrl: '/assets/food-8.jpg',
        tags: ['Fastfood', 'Pizza', 'Lunch']
      },

    ]
  }
}
