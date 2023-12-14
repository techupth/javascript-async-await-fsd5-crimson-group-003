//Exercise #1

let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding

getJohnProfile().then(console.log);

// let result = getJohnProfile().then((data)=> {
//    return data});

//console.log(result)

// let result2;

//getJohnProfile().then((data)=> {
//    result2 = data});

//console.log(result2)

/* const johnProfilePromise = getJohnProfile();




johnProfilePromise
  .then((johnProfile) => {
    console.log(johnProfile);
  })
  .catch((error) => {
    console.error(error);
  });

async function displayJohnProfile() {
  try {
    const johnProfile = await getJohnProfile();
    console.log(johnProfile);
    return johnProfile;
  } catch (error) {
    console.error(error);
  }
}

let answer = await displayJohnProfile();
console.log(answer);

console.log("hello world");

let answer2 = await getJohnProfile();
console.log(answer2);

console.log("hello world"); */
