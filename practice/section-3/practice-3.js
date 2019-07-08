'use strict';

function createUpdatedCollection(collectionA, objectB) {


  let myMap=new Map();
  for(let i = 0;i<collectionA.length;i++){
    let ch = '';
    let num = 1;
    if(collectionA[i].length!==1){
      ch = collectionA[i].charAt(0);
      console.log(collectionA[i].substr(2));
      num = parseInt(collectionA[i].substr(2));
      console.log(num);
    }else{
      ch = collectionA[i];
    }
    console.log(num);
    if(myMap.has(ch)===false){
      myMap.set(ch,num);
    }else{
      console.log(num);
      myMap.set(ch,myMap.get(ch)+num);
    }
  }
  var res = [];
  for (var [key, value] of myMap) {

    res.push({"key":key,"count":value});
  }
  console.log(res);




  var collectionB = objectB.value;
  for(let i = 0;i<res.length;i++){
    for(let j = 0;j<collectionB.length;j++){
      if(res[i].key ===collectionB[j])
        res[i].count = res[i].count - Math.floor(res[i].count/3);
    }
  }
  return res;
}
