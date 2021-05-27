//const person = {
//    name: 'Khalid',
//    age: 20,
//    location: {
//        city: 'Casablanca',
//        temp: 30
//    }
//}
//
//const { name: firstName = 'Anonymous', age } = person;
//console.log(`${firstName} is ${age} years old.`);
//
//const { city, temp: temperator } = person.location;
//if (city && typeof temperator) {
//    console.log(`it's ${temperator} in ${city}.`);
//}

//const book = {
//    title: 'Ego is the Eenemy',
//    author: 'Ryan Haliday',
//    publisher: {
//        name: 'Penguin'
//    }
//};
//
//const { name: publisherName = 'Self-Publish' } = book.publisher;
//
//console.log(publisherName);

//const address = ['Shems al madina', 'Tit mellil', 'Casablanca', '20000'];
//
//const [, city, state = 'New York'] = address;
//
//console.log(`You are in ${city} ${state}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`);