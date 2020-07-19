import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }
}
