const someOrder = {
    items: [
        { name: 'item 1', quantity: 2, price: 200},
        { name: 'item 2', price: 800 },
        { name: 'item 3', quantity: 1, price: 100, shipping: true }
    ]
}

// passing fetch inside of this function is a technique
// called Dependancy Injection
const orderTotal = (fetch, order) => {
    if (!order.userId) {
        return Promise.reject('UserId unspecified');
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/${order.userId}`);

    // || means optional value
    const totalNormalItems = order.items
        .filter(item => !item.shipping)
        .reduce((prev, cur) => prev + (cur.quantity || 1) * cur.price, 0);

    // !! means if (true) - boolean operator
    const shippingItem = order.items
        .find(item => !!item.shipping);

    const shipping = (shippingItem) ? totalNormalItems > 1000 ? 0 : shippingItem.price : 0;
            
    return Promise.resolve(totalNormalItems + shipping);
};

module.exports = orderTotal;