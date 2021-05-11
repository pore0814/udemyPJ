import { RecipeService } from './../recipe.service';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number;

  constructor(private recipeService:RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'],
        //this.recipe = this.recipeService.getRecipes(this.id);

        this.recipe = this.recipeService.getRecipes()
      }
    );
  }

  onAddToShoppingList() {

  }

}
