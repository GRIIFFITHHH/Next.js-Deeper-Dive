export default async function About() {
  const res = await fetch("http://localhost:3000/api/about"); // full URL
  const data = await res.json();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
