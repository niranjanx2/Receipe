import { ShoppingListService } from './../shopping-list/shopping-list.services';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { EventEmitter, Inject, Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJ4KAxOZ3dNPn8o06kCQuHYHuJtH7eR5Ye0GwX2OwcspWVfLd&s',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2)
      ]
    ),
    new Recipe(
      'A new Test Receipe',
      'We need a description for test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJ4KAxOZ3dNPn8o06kCQuHYHuJtH7eR5Ye0GwX2OwcspWVfLd&s',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }
}
