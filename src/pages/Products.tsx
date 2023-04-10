import { useState } from 'react';
import { IProducts } from './Types';
import Link from 'next/link';
import Product from '@/components/Product';
import ReactPaginate from 'react-paginate';

export const Products = ({ products }: { products: IProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 8;
  const offset = currentPage * PER_PAGE;
  const currentPageData = products
    .slice(offset, offset + PER_PAGE)
    .map((product) => <Product key={product.id} product={product} />);
  const pageCount = Math.ceil(products.length / PER_PAGE);
  function handlePageClick({ selected }: { selected: number }) {
    setCurrentPage(selected);
  }

  return (
    <div className="px-8 pt-8 md:px-28 md:pt-10 w-screen">
      <div className="grid grid-cols-1 md:grid-cols-2s lg:grid-cols-4 gap-4">
        {currentPageData}
      </div>
      <ReactPaginate
        previousLabel={'First'}
        nextLabel={'Last'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={
          'pagination flex flex-row items-center justify-center w-full'
        }
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'color-blue-500'}
      />
    </div>
  );
};
