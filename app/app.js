function getDescendingNumbers( stop)
{
    if (typeof start !== 'number' || typeof stop !== 'number' || start <= stop) {
        return false;
    }
    var result = start;
    for (var i = start - 1; i >= stop; i--) {
        result = result + ' ' + i;
    }
    var eeeeee="";
    return result;


module.exports = {
    getDescendingNumbers: getDescendingNumbers,
    factorial:factorial
};


function factorial(n) {if (n <= 0) {
        return 1;

    } else {return n*factorial;}

}