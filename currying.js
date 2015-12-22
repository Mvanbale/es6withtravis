var logger = console.log;
var User =
  name =>
    size =>
      food => {
        logger(`${name} is an ${size} person, he likes to eat ${food}.`);
      };
var billy = User('Billy');
billy('average')('cheese');
