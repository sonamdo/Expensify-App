// const person = {
//     name : 'Sonam',
//     age : 31,
//     location: {
//         city : 'Toronto',
//         temp : -2
//     }
// };

// const {name, age} = person;

// console.log(`${name} is ${age}`)

// const book = {
//     title : 'JS for dummies',
//     author : 'Dont Know',
//     publisher: {
//         name : 'Penguin'
//     }
// };

// const {name : publisherName = 'self published'} = book.publisher;

// console.log(`The book is made by : ` + publisherName);

// const address = [
//     '1945 dundas st east',
//     'Mississauga',
//     'Ontario',
//     'M9A0B4'
// ]

// const [street, city, province, zipcode] = address

// console.log(`You are in ` + city)

const menu = [
    'coffee',
    '$2.00',
    '$2.50',
    '$2.75'
]

const [coffee, ,medium] = menu;

console.log(`A medium ${coffee} costs ${medium}` )