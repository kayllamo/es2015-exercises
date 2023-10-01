// const add = (x, y) => x + y; 
// const mult = (x,y) => x * y; 

// const funcCalls = new Map();
// funcCalls.set(add, 0);
// funcCalls.set(mult, 0);

// // funcCalls.set(add, 1);
// // funcCalls.set(mult, 9);

// const bandData = [
//     [3, '3 doors down'], 
//     ['three', 'three dog night'], 
//     ['nine', 'Nine inch nails'], 
//     ['four', 'The Four Seasons'], 
//     [41, 'sum 41']
// ];

// const bandMap = new Map(bandData);

// // bandMap.forEach((val, key) => {
// //     console.log(key + ' => ' + val)
// // });

// // for(let [key, val] of bandMap){
// //     console.log(key, '= ', val);
// // }

// bandMap.values();


// ***TO DO THIS PROBLEM TOGETHER WITH MENTOR**
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.


// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str){
    let vowels = 'aeiou';
    let vowelMap = new Map();
   

    for (let strKey of str){
            if(vowels = strKey.toLowerCase()){
            if (!vowelMap.has(strKey)){
                vowelMap.set(strKey) + 1;
            }
        }
    }
    return vowelMap;
}