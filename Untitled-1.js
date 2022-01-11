 string = "Major League Hacking";

 result = reverseString(string);
console.log(result);

function reverseString(str) {
    arrayStrings = str.split("");
    reverseArray = arrayStrings.reverse();
    joinArray = reverseArray.join("");
     return joinArray;
}