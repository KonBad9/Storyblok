import { fetchAllPostsSlugs, fetchPost } from "../../src/api/api";
const Blog = ({ post }) => {
  const {
    created_at,
    published_at,
    content: { title, content },
  } = post;
  return (
    <div>
      <h2>{title}</h2>
      <div>
        Opublikowane: {published_at?.split("T")[0] || created_at.split("T")[0]}
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Blog;

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const data = await fetchPost(slug);
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await fetchAllPostsSlugs();
  return {
    paths: data,
    fallback: false,
  };
};
