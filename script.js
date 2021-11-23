function solution(A) {

    var returnNumber = -1;
    var tempArray = new Array();;

   for(i=0; i < A.length; i++){

      var newIndex = A[i];
     if( tempArray[newIndex] === undefined){
        tempArray[newIndex] = 1;
     }
     else{
        tempArray[newIndex] += 1;
     }
    }
   for(j = 0; j < A.length; j++){
     if(tempArray[A[j]] == 1){
       returnNumber = A[j];
       break;
     }
   }
    return returnNumber;
}
