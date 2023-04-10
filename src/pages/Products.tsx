import { useEffect, useState } from 'react';
import { IProducts } from './Types';
import Link from 'next/link';
import Product from '@/components/Product';

export const Products = ({ products }: { products: IProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const pagesToShow = 3;

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i <= pagesToShow ||
        i > totalPages - pagesToShow ||
        (i >= currentPage - pagesToShow && i <= currentPage + pagesToShow)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`${
              i === currentPage ? 'text-blue-500 font-bold' : 'text-black'
            } py-2 px-4`}
          >
            {i}
          </button>
        );
      } else if (i - pages[pages.length - 1].key > 1) {
        pages.push('...');
      }
    }
    return pages;
  };

  const productsToDisplay = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 pt-2 md:pt-10 md:px-28">
        {productsToDisplay.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleFirstPage}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-black hover:bg-blue-700'
          } py-2 px-4 pr-2 `}
        >
          First
        </button>
        {renderPages()}
        <button
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-black'
          }py-2 px-4`}
        >
          Last
        </button>
      </div>
    </div>
  );
};
