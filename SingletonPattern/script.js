//~? Singleton are classes that can be instantiated once - noone should be able to modify them

let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error(
        'Counter Singleton cannot be instantiated more than once!!'
      );
    }
    instance = this;
    this.counter = 0;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return this.counter;
  }

  incrementCounter() {
    return ++this.counter;
  }

  decrementCounter() {
    return --this.counter;
  }
}

// const c1 = new Counter();

//const c2 = new Counter(); //~! throws Error

//> ES6 export
export default Object.freeze(new Counter());

//~> Whoever imports Counter gets same instance always
