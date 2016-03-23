var logger = console.log;
var User =
  name =>
    descriptor =>
      food => {
        logger(`${name} is an ${descriptor} person, he likes to eat ${food}.`);
      };
var billy = User('Billy')('average')('cheese');


//result:
//  Billy is an average person, he likes to eat cheese.
