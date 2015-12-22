const R = require('ramda');
// Maybe Monad
const Maybe = val => ({
  val: val,
  fmap: (f) => {
    if (this.val === null || this.val === undefined) return Maybe(null);
    return Maybe(f(this.val));
  }
});
const getFirstName = maybeName => maybeName.fmap(name => name.split(' ')[1]);
const getFirstLetter = maybeString => maybeString.fmap(string => string[0]);
const firstInitial = R.pipe(getFirstName, getFirstLetter);
// let's try this out
const user = Maybe('Bully Biff Tannen');
const initial = firstInitial(user);
console.log(initial.val, '<br />');   // "B"

const noUser = Maybe(null);
const noInitial = firstInitial(noUser);
console.log(noInitial.val);           // null
