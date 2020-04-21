function wakeDog(dogName, dogBreed) {    
    let retVal = `Wake ${dogName} the ${dogBreed}`;
    console.log(retVal);
    return retVal;
  }

  function leashDog(dogName, dogBreed)  {    
    let retVal = `Leash ${dogName} the ${dogBreed}`;
    console.log(retVal);
    return retVal;
  }

  function walkToPark(dogName, dogBreed)  {    
    let retVal = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(retVal);
    return retVal;
  }

  function throwFrisbee(dogName, dogBreed) {    
    let  retVal = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(retVal);
    return retVal;
  }

  function walkHome(dogName, dogBreed)  {    
    let retVal = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(retVal);
    return retVal;
  }

  function unleashDog(dogName, dogBreed)  {
    let retVal = `Unleash ${dogName} the ${dogBreed}`;
    console.log(retVal);
    return retVal;
  }

  let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  function exerciseDog(dogName, dogBreed)
  {
    let retArray = []
    for (let i = 0; i < routine.length; i++)
    {
        retArray.push(routine[i](dogName, dogBreed));
    }
    return retArray;
  }