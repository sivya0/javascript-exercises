const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
    return people.sort((a, b) => {
        if (a.yearOfDeath === undefined) a.yearOfDeath = new Date().getFullYear()
        if (b.yearOfDeath === undefined) b.yearOfDeath = new Date().getFullYear()
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)})[0];
};
findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
