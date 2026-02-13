export const normalizeRecipe = (hit) => {
    const recipe = hit.recipe;

    return { 
        label: recipe.label,
        image: recipe.image,
        totalTime: recipe.totalTime,
        yield: recipe.yield,
        ingredientLines: recipe.ingredientLines ?? [],
        dietLabels: recipe.dietLabels ?? [],
        cautions: recipe.cautions,
        mealType: recipe.mealType,
        dishType: recipe.dishType,
        healthLabels: recipe.healthLabels,
        totalNutrients: recipe.totalNutrients,
    };
}