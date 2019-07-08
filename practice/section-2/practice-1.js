'use strict';

function countSameElements(collection) {
  let myMap=new Map();
  for(let i = 0;i<collection.length;i++){
    if(myMap.has(collection[i])===false){
      myMap.set(collection[i],1);
    }else{
      myMap.set(collection[i],myMap.get(collection[i])+1);
    }
  }
  let res = [];
  for (var [key, value] of myMap) {
    res.push({"key":key,"count":value});
  }
  console.log(myMap.valueOf());
  return res;
}
