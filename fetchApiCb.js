function fetchDataFromAPI(callback) {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
}

function handleAPIData(error, data) {
    if (error) {
        console.log('Error getting API data: ', error);
    } else {
        console.log('API data: ', data);
    }
}

fetchDataFromAPI(handleAPIData);