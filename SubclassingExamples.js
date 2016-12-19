// Functional subclassing

var Person = function(name) {
  var obj = {};
  obj.name = name;
  obj.age = 0;
  return obj;
}

var Child = function(name) {
  var obj = Person(name);
  obj.age = 10;
  obj.hobby = 'none';
  obj.newHobby = function(activity) {
    obj.hobby = activity;
  }
  return obj;
}

// Pseudoclassical subclassing

var Person = function(name) {
  this.name = name;
  this.age = 0;
}

Person.prototype.grow = function(years) {
  this.age += years;
}

var Child = function(name) {
  Person.call(this, name);
  this.age = 10;
  this.hobby = 'none';
}

Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child;

Child.prototype.newHobby = function(activity) {
  this.hobby = activity;
}

// ES6 Subclassing

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
  }

  grow(years) {
    this.age += years;
  }
}

class Child extends Person {
  constructor(name) {
    super(name);
    this.age = 10;
    this.hobby = 'none';
  }

  newHobby(activity) {
    this.hobby = activity;
  }
}