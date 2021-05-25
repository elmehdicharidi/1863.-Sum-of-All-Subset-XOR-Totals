/**
 * @param {number[]} nums
 * @return {number}
 */

//Get all the subsets
const getAllSubsets = theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
          subsets.map(set => [value,...set])
        ),
        [[]]
      );

var subsetXORSum = function(nums) {  

  const subsets = getAllSubsets(nums);
  let result = 0;

  // Go through each subset and caluclate the XOR value
  for(let i=1; i<subsets.length; i++){
    let xorValue = subsets[i][0]
    for(let j=1;j<subsets[i].length;j++){
      xorValue ^= subsets[i][j]
   }
    
    // Adding the result of XORing the subset to the result
    result += xorValue
  }
 return result;
};
