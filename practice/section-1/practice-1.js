'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectSameElements = [];
  for(let i = 0;i<collectionA.length;i++){
    for(let j = 0;j<collectionB.length;j++){
      if(collectionA[i]===collectionB[j]){

        collectSameElements.push(collectionA[i]);
        console.log(collectionA[i]);
      }

    }
  }

  return collectSameElements;
}
