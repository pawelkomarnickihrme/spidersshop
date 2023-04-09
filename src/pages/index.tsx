import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  GetStaticPathsResult,
  GetStaticPropsResult,
  GetStaticPropsContext,
  GetStaticProps,
} from 'next';
import { IProduct, IProducts } from './Types';
import axios from 'axios';
import Link from 'next/link';
import { Products } from './Products';

const inter = Inter({ subsets: ['latin'] });

export const getStaticProps: GetStaticProps = async () => {
  const resp = await axios.get(
    'https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/products'
  );
  const products = resp.data;
  return {
    props: {
      products,
    },
  };
};

export default function Home({ products }: { products: IProducts }) {
  console.log(products);
  return (
    <Products products={products} />
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    //   {products.map((product) => (
    //     <div key={product.id}>
    //       <Link href={`/product/${product.id}`}>
    //         <h3>{product.name}</h3>
    //         <p>{product.description}</p>
    //         <img src={product.image} alt={product.name} />
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
}
