var addon = require('bindings')('parser');
var expect = require("chai").expect;

var string1 = "Also Keyword good definition awesome period";

describe("Flashcard Parser", function() {
    it("converts a string to flashcards", function() {
        var set1 = addon.parseIntoCardsFromAudio(string1);
        console.log(set1);
        expect(set1).to.have.deep.keys({"good " : "awesome "});
    });
});