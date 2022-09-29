import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';


export interface ProductPageProps {
  product :any[]; 
}

export default function ProductPage (props: ProductPageProps) {
  return (
    <div>
      <h1>Product List Page</h1>
    </div>
  );
}
export const getStaticProps: GetStaticProps<ProductPageProps> = async (context: GetStaticPropsContext) => {
  return {
    props:{
      product:[],
    }
  }

  

}
