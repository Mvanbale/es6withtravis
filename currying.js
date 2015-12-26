var logger = console.log;
var User =
  name =>
    descriptor =>
      food => {
        logger(`${name} is an ${descriptor} person, he likes to eat ${food}.`);
      };
var billy = User('Billy');
billy('average')('cheese');
