import { IProduct } from '@/components/Types';
import Link from 'next/link';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

function Product({ product }: { product: IProduct }) {
  const { name, description, image, promotion, rating, active, id } = product;
  const [ratingValue, setRatingValue] = useState(parseInt(rating) / 2);
  const handleRating = (rate: number) => {
    console.log(`fetch ${rate} rate to db`);
  };

  return (
    <div className="relative rounded-lg overflow-hidden my-3 bg-white h-100 w-70 flex flex-col justify-between">
      {promotion && (
        <div className="absolute top-2 left-0 bg-yellow-500 text-white py-1 px-4">
          Promo
        </div>
      )}
      <img
        src={image}
        className={`w-full h-2/5 object-cover ${
          active ? '' : 'filter grayscale'
        }`}
        alt={name}
      />

      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-black font-bold text-lg mb-2">{name}</h2>
          <p className="text-gray-500 text-sm mb-4">{description}</p>
        </div>

        <div className="flex flex-col justify-between">
          <div className="pb-3">
            <Rating
              allowFraction
              className="flex flex-row"
              initialValue={ratingValue}
              onClick={handleRating}
              size={20}
            />
          </div>
          {active ? (
            <button className="w-full py-2 bg-blue-500 text-white rounded-lg">
              <Link href={`/product/${id}`}>Show Details</Link>
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
    </div>
  );
}

export default Product;
