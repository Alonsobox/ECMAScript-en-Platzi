const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, banana kiwi, Apple, orange, etc, etc , etc';

for (const match of fruit.matchAll(regex)){
    console.log(match);
}