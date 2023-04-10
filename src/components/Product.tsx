import { IProduct } from '@/pages/Types';
import Link from 'next/link';
import React from 'react';

function Product({ product }: { product: IProduct }) {
  const { name, description, image, promotion, rating, active, id } = product;
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white h-100 w-70">
      <img src={image} className="w-full h-2/5 object-cover" alt={name} />

      <div className="p-4">
        <h2 className="text-black font-bold text-lg mb-2">{name}</h2>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        {active ? (
          <button className="w-full py-2 bottom-1 bg-blue-500 text-white rounded-lg">
            <Link href={`/product/${product.id}`}>Show Details</Link>
          </button>
        ) : (
          <button
            className="w-full py-2 bg-gray-500 text-white rounded-lg cursor-not-allowed"
            disabled
          >
            Unavailable
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
