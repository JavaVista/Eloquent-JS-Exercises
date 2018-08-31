/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
*/

// Toggle comment to clear the screen for testing
// document.body.innerHTML = '';

for (let line = '#'; line.length <= 7; line+= '#') {
    console.log(line);
}