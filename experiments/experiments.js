const monthlyRent = 1200;

let yearlyRent = monthlyRent * 12;
console.log(monthlyRent, yearlyRent);


const myName = "Meri Kauriola";
console.log(myName);

const firstName = "Meri";
const lastName = "Kauriola";

const sentence = `Hello ${firstName} ${lastName}! How are you?`;
console.log(sentence);

const isTheSkyBlue = true;
//booleans: true/false/undefined
console.log(isTheSkyBlue);


const num = 5;
console.log(num + 1.4);


const isSkyBlue = false;

let greeting;

  if (isSkyBlue) {
    greeting = 'It must be nice weather';
  }
    else {
      greeting = 'It must be bad weather';
    }

  console.log(greeting);



const myVariable = 10;
 // === mieluummin kuin ==
if (2+2 === 4) {
  console.log('Hooray! Math still works');
}
  else {
    console.log('Uh..Panic?');
  }


const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have all the nachos to myself");
}
else if (friendsAtYourParty <= 4) {
  console.log("Perfect amount to play some Mario Kart");
}
else {
  console.log("Wooooo, play the dance music!");
}


let friendsAtParty = 0;

while (friendsAtParty < 10) {

  //friendsAtParty = friendsAtParty + 1;
  //friendsAtParty +=1;
  friendsAtParty ++;
  //++friendsAtParty;
  console.log(friendsAtParty);
}

console.log(friendsAtParty);


let friendsAtSchool = 0;

for (let i = 0; i < 10; i++) {
    friendsAtSchool++;
}
console.log(friendsAtSchool);


const character = 't';
const timesRepeat = 5;
let myString = '';

for (let i = 0; i < timesRepeat; i++) {
  myString += character;
}
console.log(myString); //ttttt

// scope: sisältä päin näkee ulos, mutta ulkoa päin ei sisälle.


const lause = "ThIS HaS wEIrd caSInG On iT";
console.log(lause.toLowerCase());
console.log(lause.toUpperCase());

const name = "Meri Kauriola";
console.log(name.substr(6, 2)); // mistä alkaa, kuinka monta
console.log(name.substring(6, 8)); //mistä alkaa, mihin loppuu


//************ Objects and Arrays ********************
