'use strict';

function countSameElements(collection) {
  let myMap=new Map();
  for(let i = 0;i<collection.length;i++){
    let ch = '';
    let num = 1;
    if(collection[i].length!==1){
      ch = collection[i].charAt(0);
      num = Number(collection[i].charAt(2));
      console.log(num);
    }else{
      ch = collection[i];
    }
    console.log(num);
    if(myMap.has(ch)===false){
      myMap.set(ch,num);
    }else{
      console.log(num);
      myMap.set(ch,myMap.get(ch)+num);
    }
  }
  let res = [];
  for (var [key, value] of myMap) {
    if(value > 1)
      res.push({"key":key,"count":value});
  }
  console.log(myMap.valueOf());
  return res;
}
