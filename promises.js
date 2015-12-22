'use strict';


// in this function I chain two promises, the second promise makes use of the output of the first one. This works because I return a promise on line 26 in the then() of the first promise.
// if I wanted to wait for multiple promises to be ready I would use Promise.all[prom1,prom2,prom3].then(function(result){})
var getUser = (name) => {
  const getUserData = (name) => {
    return new Promise((resolve, reject) => {
      setTimeout(function () { // simulated db call here, getting username and profilename
        let result = { userName: name };
        result.profileName = name.toUpperCase();
        resolve(result);
      }, 1000);
    }); };
  const getFriendList = (result) => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {//  db call here, getting friendlist
        result.friendList = ['#23332,#221124,#214144'];
        resolve(result);
      }, 1000);
    }); };

  getUserData(name).then(function (result) {
    renderHTML(result);
    return getFriendList(result);
  }).then(function (result) {
    renderHTML(result);
  }).catch((err) => {
        // if any errors occured in the chain, it would bubble up and be caught here.
    console.log('rejected:', err);
  });
};

function renderHTML (user) {
  console.log(`data:
        Username: ${user.userName}
        Friendlist:${user.friendList}
        Profilename:${user.profileName}`);
}

getUser('Harry');
