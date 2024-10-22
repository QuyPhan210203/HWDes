const myFrend = new Map();

myFrend.set('name', 'Lê Huỳnh Dũng');
myFrend.set('age', 21);
myFrend.set('job', 'Software Developer');

console.log(myFrend.get('name'));

console.log(myFrend.has('age'));

myFrend.delete('job');

myFrend.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

console.log(myFrend.size);

myFrend.clear();
console.log(myFrend.size);
