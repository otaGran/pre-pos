'use strict';

function collectSameElements(collectionA, objectB) {
  var collectSameElements = [];
  var collectionC = objectB.value;
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
