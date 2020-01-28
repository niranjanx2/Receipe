import { Ingredient } from './../shared/ingredient.model';
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredient: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredient: Ingredient[]) {
    this.name = name;
    this.imagePath = imagePath;
    this.description = desc;
    this.ingredient = ingredient;
  }
}
