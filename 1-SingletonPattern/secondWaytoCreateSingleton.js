const counter = {
  name: "Counter",
  count: 0,
  increment() {
    this.count++;
  },
};
export default Object.freeze(counter);

//~! demerits
//! es modules by default are singletons - modules exported can be modified elsewhere in any module
//! irregularities throughout application if any module manipulates singleton's value
//! cannot do unit testing - we have to look for global view of application
