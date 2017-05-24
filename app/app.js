function getDescendingNumbers(start, stop)
{
    if (typeof start !== 'number' || typeof stop !== 'number' || start <= stop) {
        return false;
    }

    var result = start;
    for (var i = start - 1; i >= stop; i--) {
        result = result + ' ' + i;
        var eeeee;
        var "ssfsddf";
    }return ;
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