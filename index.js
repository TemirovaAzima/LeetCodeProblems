// first u should sort them first
// remove the duplicates ones
// create expected length in order to check the output together
// so first we should
// u need to have two arrays first the current array and the only unique arrays
// so the first array will decide for u to add a new unique value for the array or just bypass it
function removeDuplicates (nums){
    let i =0;
    for(let j = 1; j< nums.length; j++){
        if(nums[j] !==nums[i]){
            i++;
            nums[i] = nums[j]
        }
    }
   return i + 1;
}

console.log(removeDuplicates([1,1,2,3,4]));
