import Link from "next/link";

const Article = ({ post }) => {
  const {
    created_at,
    published_at,
    slug,
    content: { title, excerpt },
  } = post;
  return (
    <div>
      <h2 className="underline">{title} </h2>
      <p>{excerpt}</p>
      <small>
        Opublikowano: {published_at?.split("T")[0] || created_at.split("T")[0]}
      </small>
      <Link href={"/blog/" + slug}> Zobacz więcej</Link>
    </div>
  );
};

export default Article;
