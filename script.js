let dishes = [
    ["ramen", "Sushi", "Pho"],
    ["Rasta Pasta", "Oxtail", "Stew Chicken"],
    ["pizza", "Pasta", "Curry Chicken"]
]

//create a function that takes in a nested array of arrays and outputs a nested array of objects that hold elements based on alphabets P, S and other
//function will take in a nestedArrOfArr
//within the function i will have to declare several empty variables; 3 empty objects (based on P, S, other), an empty array,
//the function will have to iterate through the array twice (because it is nested we need to not only iterate through the nested array but also the elements of the arrays within)
//once im within the second iteration, i can check each element for the first letter (i can set up a test case to check if its capitalized or not, and if its not it will capitalize the first letter)
//it will then also check if the first letter matches either "r", "p" or "s" and will be pushed into the designated object 

//first attempt:

function createObjs (nestedArr) {
    let objP = {};
    let objS = {};
    let objOthers = {};
    let newArr = [];
    // console.log(nestedArr)

    for(let i = 0; i <= nestedArr.length-1; i++){
        // console.log(nestedArr[i])
        let index = nestedArr[i]
        for(let j = 0; j <= index.length-1; j++){
            // console.log(index[j])
            index[j].charAt(0).toUpperCase()
            if(index[j].charAt(0) === ("S")){
                objS["S"] = index[j]
                newArr.push(objS)
                // console.log(objS)
            } if (index[j].charAt(0) === ("P")){
                objP["P"] = index[j]
                // console.log(objP)
            } else {
                objOthers["Other"] = index[j]
                // console.log(objOthers)
            }
            // console.log(newArr)
        }
        // console.log(newArr)

    }
    // console.log(newArr)
    // return newArr
}

// createObjs(dishes)


//second attempt (first working attempt):

function newCreatedObjs(nestedArr) {
    // console.log(nestedArr)
  let flatAndSortedArr = nestedArr.flat().sort();
//   console.log(flatAndSortedArr);
  let objP = [];
  let objS = [];
  let objOthers = [];
  let newPObj = {}
  let newSObj = {}
  let newOtherObj = {}

  let newArr = [];

  for (let i = 0; i <= flatAndSortedArr.length - 1; i++) {
    flatAndSortedArr[i].charAt(0).toUpperCase();
    if (flatAndSortedArr[i].charAt(0) === "P") {
      objP.push(flatAndSortedArr[i]);
    //   console.log(objP);
    }
    else if (flatAndSortedArr[i].charAt(0) === "S") {
      objS.push(flatAndSortedArr[i]);
    } else {
      objOthers.push(flatAndSortedArr[i]);
    }

  }
    // console.log(objOthers, objP, objS)
    newPObj["P"] = objP;
    newSObj["S"] = objS;
    newOtherObj["Others"] = objOthers;
    newArr.push(newPObj, newSObj, newOtherObj)
    return newArr
}

// console.log(newCreatedObjs(dishes))

//third attempt optimizing my last attempt, also works:

function newObjs(nestedArr) {
  // console.log(nestedArr)
  let flatAndSortedArr = nestedArr.flat().sort();
  //   console.log(flatAndSortedArr);
  let objP = [];
  let objS = [];
  let objOthers = [];
  let newPObj = {};
  let newSObj = {};
  let newOtherObj = {};
  let newArr = [];

  flatAndSortedArr.forEach((el) => {
    let x = el;
    if (x.charAt(0).toUpperCase() === "P") {
      objP.push(x);
      //   console.log(objP);
    } else if (x.charAt(0).toUpperCase() === "S") {
      objS.push(x);
    } else {
      objOthers.push(x);
    }
  });

  newPObj["P"] = objP;
  newSObj["S"] = objS;
  newOtherObj["Others"] = objOthers;
  newArr.push(newPObj, newSObj, newOtherObj);
  return newArr;
}

console.log(newObjs(dishes))