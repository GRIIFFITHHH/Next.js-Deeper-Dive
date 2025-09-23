export async function GET() {
  const posts = [
    { id: 1, title: "My First Post" },
    { id: 2, title: "Learning Next.js" },
    { id: 3, title: "Using API Routes" },
  ];

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
