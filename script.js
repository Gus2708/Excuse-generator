let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function randomSelector ( array ) {
    return array[Math.floor(Math.random() * array.length)];
};

function generateExcuse() {
    let whoRandom = randomSelector( who );
    let actionRandom = randomSelector( action );
    let whatRandom = randomSelector( what );
    let whenRandom = randomSelector( when );

    let excuse = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;

    return excuse;
};

window.onload = function () {
    document.getElementById("excuse").innerHTML = generateExcuse();
};