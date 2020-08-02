// passing fetch inside of this function is a technique
// called Dependancy Injection

/**
 * @author isaac.babalola
 * @date 02/07/2020
 * @param {*} fetch 
 * @param {*} order 
 */
const orderTotal = async (fetch, order) => {   
    if (!order.userId) {
        throw new Error('UserId unspecified');
    }

    return await fetch(`https://jsonplaceholder.typicode.com/todos/${order.userId}`)
        .then(response => response.json())
        .then(json => {
            // || means optional value
            const totalNormalItems = order.items
                .filter(item => !item.shipping)
                .reduce((prev, cur) => prev + (cur.quantity || 1) * cur.price * (json.rate || 1), 0);
        
            // !! means if (true) - boolean operator
            const shippingItem = order.items.find(item => !!item.shipping);
            const shipping = (shippingItem) ? totalNormalItems > 1000 ? 0 : shippingItem.price : 0;

            return totalNormalItems + shipping;
        })
        .catch(e => {
            console.log('Error', e);
        });
};

module.exports = orderTotal;