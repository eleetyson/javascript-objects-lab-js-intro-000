let recipes1 = {type:"pasta", ingredient:"flour"};

function updateObjectWithKeyAndValue(recipes, keyAdd, valueAdd) {
  return Object.assign({}, ...recipes, {keyAdd:valueAdd});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, keyAdd, valueAdd) {
  recipes.keyAdd = valueAdd;
  return recipes1;
}
