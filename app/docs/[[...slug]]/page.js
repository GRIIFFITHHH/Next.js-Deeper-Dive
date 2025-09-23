export default function Docs({ params }) {
  return (
    <div>
      <h1>Docs</h1>
      <ul>
        {params?.slug?.length ? (
          params.slug.map((s, i) => <li key={i}>{s}</li>)
        ) : (
          <li>Overview</li>
        )}
      </ul>
    </div>
  );
}
