// This is a short-length challenge, but requires some clever thinking.
// Given two lists, find the smallest difference (subtraction) between any two nums.

// For example, given the arrays:
// [10, 20, 14, 16, 18]
// [30, 23, 54, 33, 96]

// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.
// Write a function that determines the smallest difference.


//this function includes negative differences...
function difference(arr1, arr2) {
   
    if ((Math.max(...arr1) - Math.min(...arr2)) < (Math.max(...arr2) - Math.min(...arr1))){
        return Math.abs(Math.max(...arr1) - Math.min(...arr2))
    }else {
       return Math.abs(Math.max(...arr2) - Math.min(...arr1))
    }
}

console.log(difference([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]))  //3
console.log(difference([1, 2, 3], [4, 5, 6]))  //1
console.log(difference([9, 8], [7, 3]))  //1
console.log(difference([1,2,3,4,20,24,28,30],[6,7,8,19,20,33])) //-24




function smallestDifference (left, right)

{//declare difference = infinity
    let difference = Infinity;
    //sort arrays set left and right array pointers to first elements
    left.sort((a,b) => a-b)
    right.sort((a,b) => a-b)
    //initialize left and right indices
    let a = 0;
    let b = 0;
    while ( a<left.length && b<right.length)
    {//if difference is more than array left - array right, update 
        if (Math.abs(left[a]-right[b]) < difference){
            difference = Math.abs(left[a]-right[b])
        }
        //if left[a] < right[b] increment a, otherwise increment b
        if (left[a]<right[b]){
            a++
        }
        else{
            b++
        }

    }return difference
}

console.log(smallestDifference([10, 20, 14, 16, 18], [30, 23, 54, 33, 96])) //3
console.log(smallestDifference([1, 2, 3], [4, 5, 6]))  //1
console.log(smallestDifference([9, 8], [7, 3]))  //1
console.log(smallestDifference([6,7,8,19,20,33],[1,2,3,4,20,24,28,30])) //0