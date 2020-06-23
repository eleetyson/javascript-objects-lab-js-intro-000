let recipes = {prop1 : 1, prop2 : 2};

function updateObjectWithKeyAndValue(recipes, keyAdd, valueAdd) {
  recipes.keyAdd = valueAdd;
  return recipes;
}
