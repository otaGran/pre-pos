'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectSameElements = [];
  var collectionC = collectionB[0];
  for(let i = 0;i<collectionA.length;i++){
    for(let j = 0;j<collectionC.length;j++){
      if(collectionA[i]===collectionC[j]){

        collectSameElements.push(collectionA[i]);
        console.log(collectionA[i]);
      }

    }
  }

  return collectSameElements;
}
