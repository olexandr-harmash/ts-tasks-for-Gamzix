//function return boolean value if string value are readible from both sides
function isPalindrome(value: string): boolean { 
    console.log (value) //traking value
    // TODO console.log ({ value }); throw new Error ("Not Implemented");
    if (typeof value === 'string' && value.length > 0) {
        //reverse string and compare
        return value.split('').reverse().join('') === value
    }
    //throw exception if terms are not allowed
    throw new Error('value must be a string')
}
module.exports = isPalindrome