 function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }
  
 function leashDog(dogName="Byron", dogBreed="poodle") {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
  }
  
  var walkToPark = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }
  
  var throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }
  
  var walkHome = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
  }
  
  var unleashDog = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
  }

const routine =[wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog]

function exerciseDog(dogName,dogBreed){
    let array =[];
    let i = 0;
    while (i <routine.length){
        array.push(routine[i](dogName,dogBreed));
        i++;
    }
    return array;
    //return routine.map(fn => fn(dog, breed))
}