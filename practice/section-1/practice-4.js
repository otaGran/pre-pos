'use strict';

function collectSameElements(collectionA, objectB) {
  var collectSameElements = [];
  var collectionB = objectB.value;
  for(let i = 0;i<collectionA.length;i++){
    for(let j = 0;j<collectionB.length;j++){
      if(collectionA[i].key===collectionB[j]){

        collectSameElements.push(collectionA[i].key);
        console.log(collectionA[i].key);
      }

    }
  }

  return collectSameElements;

}
