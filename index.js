function wakeDog(dogName, dogBreed) {
    let r = `Wake ${dogName} the ${dogBreed}`
    console.log(r);
    return r
  }

function leashDog(dogName, dogBreed) {
    let r = `Leash ${dogName} the ${dogBreed}`
    console.log(r)
    return r
}

function walkToPark(dogName, dogBreed) {
    let r = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(r)
    return r
}

function throwFrisbee(dogName, dogBreed) {
    let r = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(r)
    return r
}

function walkHome(dogName, dogBreed) {
    let r = `Walk home with ${dogName} the ${dogBreed}`
    console.log(r)
    return r
}

function unleashDog(dogName, dogBreed) {
    let r = `Unleash ${dogName} the ${dogBreed}`
    console.log(r)
    return r
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let result = []
    for(let i = 0; i < routine.length; i++) {
       result.push(routine[i](dogName, dogBreed));
    }
    return result;
}