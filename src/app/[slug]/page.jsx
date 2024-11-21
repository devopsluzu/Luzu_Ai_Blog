import React from 'react';
import BlogSingleData from '@api/blog/BlogSingleData'; // Assuming this fetches blog data
import BlogPage from '@components/blog-page/blog-single/BlogSingle'; 
import  getOpenGraphImage  from '../../components/opengraph-image.js';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params, searchParams }, parent) {
  const id= params.slug;
  const product = BlogSingleData.find(blog => blog.id === id);
  const imageUrl = product.metaImage; // Get the Open Graph image based on the product ID

  if(!product){
    return notFound();
  }

  return {
    title: product.title,
    description: product.metaDescription,
    metadataBase: `https://blog.trafyai.com/${product.id}`,
    type: 'article',
    openGraph: {
      title: product.title, 
      description: product.metaDescription,
      url: `https://blog.trafyai.com/${product.id}`,
      images: [
        {
          url: product.metaImage,
          width: 1200,
          height: 630,
          alt: "Prfec AI - Business Solutions"
        }
      ],

    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.metaDescription,
      url: `https://blog.trafyai.com/${product.id}`,
    },
  }
}

const Page = ({ params }) => {
  const id = params.slug;
  const BlogData = BlogSingleData.find(blog => blog.id === id);

  if(!BlogData){
    return notFound();
  }

  return (
    <>

    <div>
       
      <BlogPage {...BlogData} />
    </div>
    </>
  );
};

export default Page;

