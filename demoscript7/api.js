async function fetchProduct() {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const product = await response.json();

        const { id, name, price, features } = product;

        const clonedPrd = {
            id,
            name,
            price,
            features: {
                ...features,
                warranty: '2 years'
            }
        };

        console.log('clonedPrd: ', clonedPrd);
    } catch (error) {
        console.error('Error fetch prd: ', error);
    }
}

fetchProduct();