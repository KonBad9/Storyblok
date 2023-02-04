import Head from "next/head";
import { searchPosts } from "../../src/api/api";
import Article from "../../src/components/Article/Article";
import Form from "../../src/components/Form/Form";

const Search = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Find the best web dev content" />
      </Head>
      <Form />
      {posts.map((post) => {
        return <Article key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Search;

export const getServerSideProps = async ({ query }) => {
  const { search } = query;
  const data = await searchPosts(search);
  return {
    props: {
      posts: data || [],
    },
  };
};
