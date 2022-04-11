import bindings from 'bindings'
var addon = bindings('parser')

console.log(addon.parseIntoCardsFromAudio("Also Keyword good definition awesome period")); // 'world'