
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = matrix;
    let a = [];
    if (Array.isArray(arr) == false) { return []}
  
    for (let i = 0; i < arr.length; i++) {
          if(i % 2 == 0) { 
              for (let s = 0; s < arr[i].length; s++){
                  a.push(arr[i][s]);
              }
              
            } else {
                for (let w = (arr[i].length -1); w >= 0; w--){
                a.push(arr[i][w]);
                }
                
            }
    } 
  return (a);
}
