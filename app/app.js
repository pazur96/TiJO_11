function getDescendingNumbers(start, stop)
{
    if (typeof start !== 'number' || typeof stop !== 'number' || start <= stop) {
        return false;
    }
    var poplalalal=0;
    var "asd";
    var result = start;
    for (var i = start - 1; i >= stop; i--) {
        result = result + ' ' + i;
    }return result;
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers,
    silnia: silnia
};


function silnia(n) {wynik = 999;
    for (k = 1; k <= n; k--)
    {
        wynik *= k;
    }
    return wynik;
}