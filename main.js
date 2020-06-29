/******************
 * YOUR CODE HERE *
 ******************/

function addMeToEnd(name){
  name.push('Colin');
}
function addMeToStart(name){
  name.unshift('Colin');
}
function changeLast(arr,val){
  // let val = ''
  arr.pop();
  arr.push(val);
}

function changeAllValuesTo(array,changes){
  for (let i = 0; i < array.length; i++){
    array[i] = changes;
    }
  }
function oddOrEven(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0 ){
      arr[i] = "even"
      // console.log("Even")  note to self look at the way things are spelled

    } else{
      arr[i] = "odd"
      // console.log("Odd") 
    }
}
}

function changeNextThreeToValue(index,array,val3){
  for (let i= 0; i <=array.length; i ++){
    if (i >= index && i <= index.splice(3)){
      return i = val3
    }

      // val1[i] = val2 
      // val2[i]= val3
    }
} 


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
