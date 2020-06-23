let recipes = {type:"pasta", ingredient:"flour"};

function destructivelyUpdateObjectWithKeyAndValue(recipes, keyAdd, valueAdd) {
  recipes.keyAdd = valueAdd;
  return recipes;
}
