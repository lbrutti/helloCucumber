const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const DayChecker = require('../../src/DayChecker');

Given('today is {string}', function (string) {
    this.today = string;
});

When('I ask whether it\'s Friday yet', function () {
    this.answer = DayChecker.isItFridayYet(this.today);
});

Then('I should be told {string}', function (string) {
    assert.equal(this.answer, string);
});