const productsArray = [
    {
        id: '1',
        title: 'Coffee',
        price: 5.30
    },
    {
        id: '2',
        title: 'Tablet',
        price: 499.99
    },
    {
        id: '3',
        title: 'Sneakers',
        price: 160.00
    },
    {
        id: '4',
        title: 'Camera',
        price: 74.89
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
    if(productData === undefined) {
        console.log('Product does not exist. PLease check ID#:' + id);
    }
    return productData
}

export { productsArray, getProductData }