function averageThreeNumbers(a, b, c) {
    let sum = a+b+c;
    let average = Math.floor(sum/3); /* i added .floor so the avg would be a whole num */
    return average;
}

function createSentence(num, noun) {
    return "On average, a Berkeley student has " + num + ' ' + noun + "s.";
}

function getRandomNum (max) {
    return Math.floor(Math.random() * (max) + 0);
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z)

let sentence = createSentence(avg, 'rabbit')

console.log(sentence);
