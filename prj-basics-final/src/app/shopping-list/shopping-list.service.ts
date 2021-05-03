import { EventEmitter } from '@angular/core';
import { Ingredient, } from './../shared/ingredient.model';


export class ShoppingListService {

  ingredientsChanges = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingrendient:Ingredient) {
      this.ingredients.push(ingrendient);
      this.ingredientsChanges.emit(this.ingredients);
  }

}
