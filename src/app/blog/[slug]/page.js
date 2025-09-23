export default async function BlogPost({ params }) {
  // destructure the slug array from params
  const { slug } = params;

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog: {slug}</h1>
      <p>
        This is the content for the blog post titled <strong>{slug}</strong>.
        You can fetch more data from an API here if needed.
      </p>
    </div>
  );
}
