function App() {
    const [products] = React.useState([
        {
            id: 1,
            name: "Jugo la Estancia 1L",
            description: "Jugo de origen cubano, sabor naranja.",
            price: 1.50,
            image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
        },
        {
            id: 2,
            name: "Pizza Margherita",
            description: "Pizza tradicional con salsa de tomate, mozzarella y albahaca fresca",
            price: 15.99,
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
        },
        {
            id: 3,
            name: "Pasta Carbonara",
            description: "Espaguetis con salsa cremosa, panceta, huevo y queso pecorino",
            price: 14.99,
            image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
        }
    ]);

    const [cartItems, setCartItems] = React.useState([]);
    const [isCartOpen, setIsCartOpen] = React.useState(false);

    const handleAddToCart = (product) => {
        try {
            setCartItems(prevItems => addToCart(prevItems, product));
        } catch (error) {
            reportError(error);
        }
    };

    const handleUpdateQuantity = (productId, quantity) => {
        try {
            setCartItems(prevItems => updateCartItemQuantity(prevItems, productId, quantity));
        } catch (error) {
            reportError(error);
        }
    };

    const handleRemoveItem = (productId) => {
        try {
            setCartItems(prevItems => removeCartItem(prevItems, productId));
        } catch (error) {
            reportError(error);
        }
    };

    const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div data-name="app" className="min-h-screen bg-gray-100">
            <Header 
                cartCount={cartItemsCount}
                onCartClick={() => setIsCartOpen(true)}
            />
            <main className="container mx-auto py-8">
                <ProductList 
                    products={products}
                    onAddToCart={handleAddToCart}
                />
            </main>
            {isCartOpen && (
                <Cart
                    items={cartItems}
                    onClose={() => setIsCartOpen(false)}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                />
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
