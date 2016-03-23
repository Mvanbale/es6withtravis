var logger = console.log;
var User =
  name =>
    descriptor =>
      food => {
        logger(`${name} is an ${descriptor} person, he likes to eat ${food}.`);
      };
var billy = User('Billy')('average')('cheese');

var ingredients = [{ingredient: 'kaas', amount: 12, unit: 'gram'},
{ingredient: 'ham', amount: 100, unit: 'gram'},
 {ingredient: 'brood', amount: 4, unit: 'gram'}];

const filter =
  input =>
    (ingredient = null) =>
      amountLower =>
        amountUpper =>
          unit => {
            if (ingredient !== null) input = input.filter(entry => entry.ingredient.toLowerCase() === ingredient.toLowerCase());
            if (amountLower !== null) input = input.filter(entry => entry.amount >= amountLower);
            if (amountUpper !== null) input = input.filter(entry => entry.amount <= amountUpper);
            if (unit !== null) input = input.filter(entry => entry.unit.toLowerCase() === unit.toLowerCase());
            return input;
          };
const myFilteredIngredients = filter(ingredients)('hAm')(0)(null)('gram');

console.log(myFilteredIngredients);

//result:z
//  Billy is an average person, he likes to eat cheese.
