import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  GetStaticPathsResult,
  GetStaticPropsResult,
  GetStaticPropsContext,
  GetStaticProps,
} from 'next';
import { IProducts, ISearchParms } from './Types';
import axios from 'axios';
import { Products } from './Products';
import Nav from './Nav';
import { useState } from 'react';
import Head from 'next/head';

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
  const [searchParms, setSearchParms] = useState<ISearchParms>({
    searchValue: '',
    isActive: false,
    isPromotion: false,
  });
  function filterItems(items: IProducts, searchParms: ISearchParms): IProducts {
    const filteredItems = items.filter((item) => {
      const { searchValue, isActive, isPromotion } = searchParms;
      const isInNameOrDescription =
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase());
      const isActiveAndActive = isActive && item.active;
      const isPromotionAndPromotion =
        isPromotion && item.promotion && (isActive || item.active);
      return (
        isInNameOrDescription &&
        (!isActive || isActiveAndActive) &&
        (!isPromotion || isPromotionAndPromotion)
      );
    });
    return filteredItems;
  }
  return (
    <>
      <Head>
        <title>Spiders Web Shop</title>
        <meta
          name="description"
          content="shop prepared for test assignment to spidersweb company."
        />
        <meta name="keywords" content="sklep shop spiderweb spiders web"></meta>
      </Head>
      <Nav searchParms={searchParms} setSearchParms={setSearchParms} />
      <Products products={filterItems(products, searchParms)} />
    </>
  );
}
