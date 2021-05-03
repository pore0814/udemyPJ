import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { element } from 'protractor';
import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
 // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
   const ingName = this.nameInputRef.nativeElement.value;
   const ingAmount = this.amountInputRef.nativeElement.value;
   const newIngredient = new Ingredient(ingName, ingAmount);
   //this.ingredientAdded.emit(newIngredient);

   this.slService.addIngredient(newIngredient);


   this.nameInputRef.nativeElement.value= "";
   this.amountInputRef.nativeElement.value = "";
  }
}
