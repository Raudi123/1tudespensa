function addToCart(cartItems, product) {
    try {
        const existingItem = cartItems.find(item => item.id === product.id);
        
        if (existingItem) {
            return cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }
        
        return [...cartItems, { ...product, quantity: 1 }];
    } catch (error) {
        reportError(error);
        return cartItems;
    }
}

function updateCartItemQuantity(cartItems, productId, quantity) {
    try {
        if (quantity === 0) {
            return cartItems.filter(item => item.id !== productId);
        }
        
        return cartItems.map(item =>
            item.id === productId
                ? { ...item, quantity }
                : item
        );
    } catch (error) {
        reportError(error);
        return cartItems;
    }
}

function removeCartItem(cartItems, productId) {
    try {
        return cartItems.filter(item => item.id !== productId);
    } catch (error) {
        reportError(error);
        return cartItems;
    }
}
