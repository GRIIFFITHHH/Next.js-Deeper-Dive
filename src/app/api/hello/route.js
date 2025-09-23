export async function GET() {
  const posts = [
    {
      id: 1,
      title: "My First Post",
      image: "https://www.maxfosterphotography.com/images/xl/Radiant-Swirl.jpg", // sample image
    },
    {
      id: 2,
      title: "Learning Next.js",
      image: "https://www.maxfosterphotography.com/images/xl/Radiant-Swirl.jpg",
    },
    {
      id: 3,
      title: "Using API Routes",
      image: "https://www.maxfosterphotography.com/images/xl/Radiant-Swirl.jpg",
    },
  ];

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
