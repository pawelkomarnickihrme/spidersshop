import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  GetStaticPathsResult,
  GetStaticPropsResult,
  GetStaticPropsContext,
  GetStaticProps,
} from 'next';
import { Product, Products } from './Types';
import axios from 'axios';

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

export default function Home({ products }: { products: Products }) {
  console.log(products);
  return <></>;
}
