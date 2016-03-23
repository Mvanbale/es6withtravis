var logger = console.log;
const R = require('ramda');

var ingredients = [{ingredient: 'kaas', amount: 12, unit: 'gram'},
{ingredient: 'ham', amount: 100, unit: 'gram'},
 {ingredient: 'brood', amount: 4, unit: 'gram'}];



const filterOnIngredient = (data) => {
  if (data.ingredient !== null) data.input = data.input.filter(entry => entry.ingredient.toLowerCase() === data.ingredient.toLowerCase());
  return data;
};

const filterOnAmountLower = (data) => {
  if (data.amountLower !== null) data.input = data.input.filter(entry => entry.amount >= data.amountLower);
  return data;
};

const filterOnAmountUpper = (data) => {
  if (data.amountUpper !== null) data.input = data.input.filter(entry => entry.amount <= data.amountUpper);
  return data;
};

const filterOnUnit = (data) => {
  if (data.unit !== null) data.input = data.input.filter(entry => entry.unit.toLowerCase() === data.unit.toLowerCase());
  return data;
};

const combinedFilter = R.pipe(filterOnIngredient, filterOnAmountLower, filterOnAmountUpper, filterOnUnit);

const filter =
  input =>
    (ingredient) =>
      amountLower =>
        amountUpper =>
          unit => {
            var data = {input, ingredient, amountLower, amountUpper, unit};
            return combinedFilter(data).input;
          };

const myFilteredIngredients = filter(ingredients)(null)(0)(null)('gram');
console.log(myFilteredIngredients);

//result:z
//  Billy is an average person, he likes to eat cheese.
