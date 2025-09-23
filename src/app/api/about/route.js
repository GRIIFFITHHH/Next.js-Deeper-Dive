// app/api/about/route.js
export async function GET() {
  const aboutData = {
    title: "About Marketing",
    description: "This is the About Marketing page of our Next.js demo.",
  };

  return new Response(JSON.stringify(aboutData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
