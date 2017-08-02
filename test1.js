/**
 * Test 1
 * This is the first coding challenge. Below are two arrays. 
 * The second array is identical to the first except for one number.
 * Find the missing number and log it in the console
 *
 * You may use any development tools or package manager you like. 
 * Lodash is included as a bower.json dependency in case you would like to use it.
 */


(function iife(){
    var arr = [1,2,5,7,4,8,10,9,12,15,17,37];
    var secondArr = [1,17,5,12,4,7,15,2,37];
    var sortedArr = arr.sort(function(a,b){return b-a});
    var sortedSecondArr = secondArr.sort(function(a,b){return b-a});
    Array.prototype.diff = function (arr2){
        var ret= [];
        for(var i in this){
            if(arr2.indexOf(this[i]) < 0){
                ret.push(this[i]);
            }
        }
        ret.pop();
        return ret;
    }
    console.log("Solution of Test 1", sortedArr.diff(sortedSecondArr));
})();
 