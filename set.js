const favoriteESports = new Set();

favoriteESports.add('GAM');
favoriteESports.add('T1');
favoriteESports.add('G2');
favoriteESports.add('GAM');

console.log(favoriteESports);

console.log(favoriteESports.has('GAM'));
console.log(favoriteESports.has('G2'));
console.log(favoriteESports.has(''));

favoriteESports.delete('T1');
console.log(favoriteESports);

favoriteESports.forEach(sport => {
    console.log(sport);
});

console.log(favoriteESports.size);

favoriteESports.clear();
console.log(favoriteESports.size);

const favoriteESportsArray = ['GAM', 'T1', 'G2', 'GAM', 'T1', 'G2'];
const uniqueESports = [...new Set(favoriteESportsArray)];
console.log(uniqueESports); // ['GAM', 'T1', 'G2']
