import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    //取得ingreients 資料
   this.ingredients = this.slService.getIngredients();
   //Shoping_edit 新增資料時，會從Service傳送過來
   this.slService.ingredientsChanges.subscribe(
     (Ingredients:Ingredient[]) => {this.ingredients = Ingredients}
   );
  }
}
