const users = [
{
    'name': 'Wao',
    'address': 'Dnag',
    'age': 20
},
{
    'name': 'Quy',
    'address': 'NY',
    'age': 22
},
{
    'name': 'Di',
    'address': 'Hnoi',
    'age': 30
}
];

/*for (x in users) {
    console.log(users[x]);
}*/

for(let {name, address, age} of users) {
    console.log(`${name} is ${age} yo & live in ${address}`);
}

