import Head from "next/head";
import { fetchAllPosts } from "../src/api/api";
import Article from "../src/components/Article/Article";
import Form from "../src/components/Form/Form";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Find the best web dev content" />
      </Head>
      <Form />
      <div>
        {posts.map((post) => {
          return <Article key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await fetchAllPosts();
  return {
    props: {
      posts,
    },
  };
};
