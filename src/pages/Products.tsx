import {
  GetStaticPathsResult,
  GetStaticPropsResult,
  GetStaticPropsContext,
} from 'next';
import useSWR from 'swr';

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  const products = 'asd';
  console.log('test');
  return {
    props: {
      products, // use the correct property name here
      fallback: false,
    },
  };
}

export default function Products(props: any) {
  console.log(props.products);
  return <div></div>;
}
