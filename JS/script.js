"use strict"

/*let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
alert(arr1.concat(arr2));*/

/*let arr = [1, 2, 3];
alert(arr.reverse(arr));*/

/*let arr = [1, 2, 3];
arr.push(4, 5, 6);
alert(arr);*/

/*let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
alert(arr);*/

/*let arr =  ["js", "css", "jq"];
alert(arr[0]);*/

/*let arr =  ["js", "css", "jq"];
alert(arr[2]);*/

/*let arr = [1, 2, 3, 4, 5];
arr.splice(3, 2);
alert(arr);*/

/*let arr = [1, 2, 3, 4, 5];
arr.splice(0, 3);
alert(arr);*/

/*let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
alert(arr);*/

/*let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.splice(1, 3);
alert(arr2);*/

/*let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 0, "a", "b", "c");
alert(arr1);*/

/*let arr = [1, 2, 3, 4, 5];
arr.splice(1, 4, "a", "b", 2, 3, 4, "c", 5, "e");
alert(arr);*/

/*let arr = [3, 4, 1, 2, 7];
arr.sort();
alert(arr);*/

/*let arr = [5, 6, 7, 8, 9];
let sum = 0;
arr.forEach(function(numbers) {
    sum += numbers;
});
alert(sum);*/

/*let arr = [5, 6, 7, 8, 9];
let newArr = [];
arr.forEach(function(numbers) {
    newArr.push(numbers * numbers);
});
alert(newArr);*/

/*let arr = [1,-3, 5, 6,-7, 8, 9,-11];
function func(elem) {return elem < 0};
let newArr = arr.filter(func);
alert(newArr);*/

/*let arr = [1,-3, 5, 6,-7, 8, 9,-11];
function func(elem) {return elem % 2 === 0};
let newArr = arr.filter(func);
alert(newArr);*/

/*let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
function func(elem) {return elem.length > 5};
let newArr = arr.filter(func);
alert(newArr);*/

/*let arr = [1, 2, [3, 4], 5, [6, 7]];
function func(elem) {return Array.isArray(elem)};
let newArr = arr.filter(func);
alert(newArr);*/

/*let arr = [1,-3, 5, 6,-7, 8, 9,-11];
function func(elem) {return elem < 0};
let newArr = arr.filter(func);
alert(newArr.length);*/