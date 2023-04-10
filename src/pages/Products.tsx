import { useState } from 'react';
import { IProducts } from './Types';
import Link from 'next/link';

export const Products = ({ products }: { products: IProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {currentProducts.map((product) => (
        <div key={product.id}>
          <Link href={`/product/${product.id}`}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} />
          </Link>
        </div>
      ))}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`mx-2 py-2 px-4 rounded ${
              page === currentPage ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};
