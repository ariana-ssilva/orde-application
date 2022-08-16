import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';



@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodByTag(tag:string): Foods[]{
    return tag == "All"?
    this.getAll(): this.getAll().filter(food => food.tags?.includes(tag));    
  }

  getAllTag():Tag[]{
    return [
      { name: "All", count: 8},
      { name: "FastFood", count: 6},
      { name: "Pizza", count: 4},
      { name: "Lunch", count: 3},
      { name: "SlowFood", count: 2},
      { name: "Hamburguer", count: 1},
      { name: "Fried", count: 1},
      { name: "Soup", count: 1},
    ]
  }
  
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
        tags: ['SlowFood', 'Lunch']
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
        tags: ['FastFood', 'Hamburguer']
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
        tags: ['FastFood', 'Fried']
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
        tags: ['SlowFood', 'Soup']
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
        tags: ['FastFood', 'Pizza', 'Lunch']
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
        tags: ['FastFood', 'Pizza', 'Lunch']
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
        tags: ['FastFood', 'Pizza', 'Lunch']
      },

    ]
  }
}
