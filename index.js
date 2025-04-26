// first u should sort them first
// remove the duplicates ones
// create expected length in order to check the output together
// so first we should
// u need to have two arrays first the current array and the only unique arrays
// so the first array will decide for u to add a new unique value for the array or just bypass it
const uniqueArray = []
const removeDuplicates = (nums) => {
    nums.map((number) => {
        if (!uniqueArray.includes(number)){
            uniqueArray.push(number)
        }
    })
    return uniqueArray
}
console.log(removeDuplicates([1, 1, 2]))
// const  currentArray = [1,2,3,2]
// const uniqueArray = []
// const removeDuplicates = (nums) => {
//     nums.map((number) => {
//         if (!uniqueArray.includes(number)) {
//             uniqueArray.push(number)
//
//         }
//     })
//     return uniqueArray
// }

// console.log(removeDuplicates([1, 1, 2]))

// removeDuplicates([4,1,2,3,3,5,6,5])
// removeDuplicates(['apple','banana','apple'])
// SO IF THE NEW UNIQUE ARRAY INCLUDES THAT NUMBER SO DONT ADD AT ALL BUT EXISTS ADD THEN
// // if(nums.includes)
// const removeDuplicates = (nums) =>{
//     return nums.sort((a, b) => {
//         // if(a!==b){
//         //     // console.log(nums.length-1)
//         //     return b ===b[nums.length-1]
//         // }}
//         if (a === b) {
//             console.log( nums.splice(a, 1))
//             nums.push(a)
//             console.log(nums)
//         }
//     })
// }
//     // return nums.sort()x
//     // if(nums)
//     // for(let i = 0; i < nums.length; i++){
//     //     if(nums[i]===nums[i++]){
//     //        [ nums[i]=== nums[nums.length-1]] = [nums[nums.length-1]];
//     //
//     //     }
//     // }
//     // return nums
//
// // }
// console.log(removeDuplicates([1,1,2,3,4,4,0]))
// // const numberOfArrays = [1,2,3,45]
// // console.log((numberOfArrays.splice(0,1)))
// // console.log(numberOfArrays.push(1))
// // first u need to get each element and then when u meet a number that was existed previously u gonna put that number at the end
// // after that array u should get the specific length till the number didnt get repeated
// // if(a===b){
// //    nums.splice(a,1)
// // nums.push(a)
// //}
