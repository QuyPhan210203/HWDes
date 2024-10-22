const favoriteESports = new Set();

favoriteESports.add('GAM');
favoriteESports.add('T1');
favoriteESports.add('G2');
favoriteESports.add('GAM');

console.log(favoriteESports);

console.log(favoriteESports.has('GAM'));
console.log(favoriteESports.has('G2'));

favoriteESports.delete('T1');
console.log(favoriteESports);

favoriteESports.forEach(sport => {
    console.log(sport);
});

console.log(favoriteESports.size);

favoriteESports.clear();
console.log(favoriteESports.size);
