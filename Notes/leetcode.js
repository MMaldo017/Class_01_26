/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let result = [];//creating and empty array called result
    
    if(!strs.length){//is an if statement that will return "" if strs.length is a falsy value and is using negation
        return "";//(empty string)
    };
    
    strs.sort();//using the sort method on strs param, and it doesnt need a compare function bc strs is and array of strings(array)
    let first = strs[0];//declaring the first element of strs as first (string)
    let last = strs[strs.length - 1];//declaring the last element of strs array as last (string)

    
    for(let i = 0; i < first.length; i++){//
       if(first[i]  === last[i]){
        result.push(first[i])
       }else{
            break;
       }     
    }
    
    //return a string of the common prefix in strs
    //.push()---> for an array
    //push to an array and then combine those elements to make single value
    //.join()
    return result.join("");
};