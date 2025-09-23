export default function BlogPost({ params }) {
  const { slug } = params; // from URL
  return <h1>Blog: {slug}</h1>;
}
