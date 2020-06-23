let recipes1 = {type:"pasta", ingredient:"flour"};

// returns object with the original key value pairs and the new key value pair
function updateObjectWithKeyAndValue(recipes, keyAdd, valueAdd) {
  return Object.assign({}, ...recipes, {[keyAdd]:valueAdd});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, keyAdd, valueAdd) {
  recipes.keyAdd = valueAdd;
  return recipes1;
}
