export default async function Home() {
  // Use relative URL for server-side fetch
  const res = await fetch("http://localhost:3000/api/hello");
  const posts = await res.json();

  return (
    <div>
      <h1>Welcome to Next.js demo 🚀</h1>
      <h2>Latest Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <img src={post.image} alt={post.title} width={150} height={150} />
          </li>
        ))}
      </ul>
    </div>
  );
}
