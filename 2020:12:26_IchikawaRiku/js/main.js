//課題6-1

const sentence = "Make you happy! is NiziU's song";

const index = 3;

console.log(`文字列の${index}は${sentence.charAt(index)}`);

const word = 'NiziU';

console.log(`The word 　"${word}"　${sentence.includes(word)? 'is':'is not'} in the sentence`);

console.log(sentence.replace('Make you happy!', 'Step and a step'));




//課題6-2

const array1 = ['Make you happy!', 'Step and a step']

console.log(array1.toString());


const isBelow = (currentValue) => currentValue < 100;

const array2 = [85, 76, 93, 63];

console.log(array2.every(isBelow));


const array3 = ["I'm", "a", "Perfect", "Human"];

console.log(array3.join('-'));

/!共通点、相違点/
//文字列や配列の指定しての操作が可能
//文字列のメソッドは文字を入れ替えたりでき、配列のメソッドは計算ができる




