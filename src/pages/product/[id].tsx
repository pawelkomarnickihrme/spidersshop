import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { IProduct, IProducts } from '../Types';
import Head from 'next/head';

type Props = {
  product: IProduct | undefined;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const resp = await axios.get(
    'https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/products'
  );
  const products: IProducts = resp.data;

  const paths = products
    .filter((product) => product.id !== undefined && product.id !== null)
    .map((product) => ({
      params: { id: product.id },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { id } = params ?? {};

  const resp = await axios.get(
    'https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/products'
  );
  const products: IProducts = resp.data;
  const product = products.find((product) => product.id === id);

  return {
    props: {
      product,
    },
  };
};

const ProductPage = ({ product }: Props) => {
  if (product)
    return (
      <>
        <Head>
          <title>{product.name}</title>
          <meta name="description" content={product.description} />
          <meta name="keywords" content={product.name}></meta>
        </Head>
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
        </div>
      </>
    );
};

export default ProductPage;
