var begin = "Start point";
console.log(begin);

var person = new Object();
person.name = "Alloha";
person.age = 24;
console.log(person.name + " with age " + person.age);

var userArr = [{
    name: "Andrew",
    salary: 1200,
  },
  {
    name: "Max",
    salary: 120,
  },
  {
    name: "Diana",
    salary: 2000,
  }
];

function getTopEmployers(users) {
  var res = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].salary >= 1000) {
      res.push(users[i].name);
    }
  }
  return res;
}

console.log(getTopEmployers(userArr));
