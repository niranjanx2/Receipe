import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addToCart() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
  }

}
