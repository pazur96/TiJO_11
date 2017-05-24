'use strict';

var expect = require('chai').expect; var app = require('../app/app');

describe('silnia', function (){it('should return strong', function ()    {
    expect(app.silnia(4)).to.eql(24);
});

describe('getDescendingNumbers', function (){
    it('should return string with numbers separated by spaces', function ()    {
        expect(app.getDescendingNumbers(15, 1)).to.eql('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
    });
});


});