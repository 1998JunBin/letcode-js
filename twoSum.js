/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var num_len = nums.length;
    var b = [];
    for(var i=0;i<num_len;i++){
        if(i===num_len-1){
               break;
        }else{
            for(var j=i+1;j<num_len;j++){
                a = nums[i]+nums[j];
                if(a===target){
                    b.push(i,j);
                };
        };
        };
    };
    return b;
};

var p = [2,7,11,15];
var q = 9;
console.log(twoSum(p,q));




