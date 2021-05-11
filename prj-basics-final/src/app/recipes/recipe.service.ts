import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';


export class RecipeService {

  recipSelected = new EventEmitter<Recipe>();

  // 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
  //'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'

 private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Another Recipe', 'This is Another simply a test', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  // getRecipes(index:number) {
  //   return this.recipes['index'];
  // }
  getRecipes() {
       return this.recipes.slice();
     }
}
