import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


// import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 recipes: Recipe[];

  constructor(private recipeService : RecipeService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    //  const id = this.route.snapshot.params['id'];
    //  console.log('id',id);
     this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipes() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
