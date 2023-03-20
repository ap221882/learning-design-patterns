//~> Proxy object is used as an intermediate object to interact with one object

//~^ Pattern is used in JavaScript using Proxy constructor fn and Reflect generally

//# Exercise

//~? Add the following validation to the user object:

//? The username property has to be a string that only contains of letters, and is at least 3 characters long
//? The email property has to be a valid email address.
//? The age property has to be a number, and has to be at least 18
//? When a property is retrieved, change the output to ${new Date()} | The value of ${property}} is ${target[property]}. For example if we get user.name, it needs to log 2022-05-31T15:29:15.303Z | The value of name is John

const user = {
  firstName: "Ajay",
  lastName: "Pathak",
  username: "johndoe",
  age: 42,
  email: "john@doe.com",
};

const proxyForUser = new Proxy(user, {
  get: (target, prop) => {
    console.log(`${new Date()} | The value of ${prop} is ${target[prop]}`);

    return Reflect.get(target, prop);
  },
  set: (target, prop, value) => {
    if (prop === "username") {
      if (prop.length < 3) {
        throw new Error(
          "The username property has to be a string that only contains of letters, and is at least 3 characters long"
        );
      }
    } else if (prop === "email") {
      //! check valid email address
    } else if (prop === "age") {
      if (typeof prop !== "number" || prop < 18) {
        console.log("control here");
        throw new Error(
          "The age property has to be a number, and has to be at least 18"
        );
      }
    }
    return Reflect.set(target, prop, value);
  },
});

console.log("user.age", proxyForUser.age);
proxyForUser.age = 11;

//~! Tradeoffs
//~* ++++ Control
//~* -- maybe execution time of handlers
