export default function BlogPost({ params }) {
  const slug = params.slug; // get slug from URL
  return <h1>Blog: {slug}</h1>;
}
