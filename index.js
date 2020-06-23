let recipes = {type:"pasta", ingredient:"flour"};

function updateObjectWithKeyAndValue(recipes, keyAdd, valueAdd) {
  recipes.keyAdd = valueAdd;
  console.log(recipes);
  return recipes;
}
