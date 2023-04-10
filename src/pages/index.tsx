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

  );
}
