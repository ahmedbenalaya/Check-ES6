let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];
const getAge = pet => new Date().getFullYear() - pet.bornOn;
pets.forEach(pet=> pet.age=getAge(pet));
pets.map(pet=>console.log(pet));
const dogs = (type) => {
  pets = pets.filter(pet=> pet.type === `dog`) ;
}
dogs("dog");
console.log(pets);

let jasper= pets.find((pet) =>{ 
   return pet.name ===`Jasper` 
});
console.log("Jasper is " + jasper.age + " years old");
