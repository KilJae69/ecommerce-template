// app/test/page.tsx
'use client';

import { useAuthStore, useCartStore } from "@/lib/hooks/useStore";



export default function TestPage() {
  const auth = useAuthStore();
  const cart = useCartStore();

  return (
    <div className="p-6 mt-42 space-y-6">
      {/* Auth Section */}
      <div className="border p-4 rounded shadow">
        <h2 className="font-semibold text-xl mb-2">Auth Test</h2>
        {auth.isAuthenticated ? (
          <div>
            <p>Welcome, {auth.user?.name} ({auth.user?.email})</p>
            <button onClick={auth.logout} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
          </div>
        ) : (
          <button
            onClick={() => auth.login({ name: 'John Doe', email: 'demo@example.com' })}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Login as Demo User
          </button>
        )}
      </div>

      {/* Cart Section */}
      <div className="border p-4 rounded shadow">
        <h2 className="font-semibold text-xl mb-2">Cart Test</h2>
        <button
          onClick={() => cart.addItem({ id: '123', name: 'Shoe', price: 89.99, quantity: 1 })}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Shoe
        </button>

        <ul className="space-y-2">
          {cart.items.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span>
                {item.name} x{item.quantity} - ${item.price.toFixed(2)}
              </span>
              <button onClick={() => cart.removeItem(item.id)} className="text-sm text-red-600">Remove</button>
            </li>
          ))}
        </ul>

        {cart.items.length > 0 && (
          <button
            onClick={cart.clearCart}
            className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
}
