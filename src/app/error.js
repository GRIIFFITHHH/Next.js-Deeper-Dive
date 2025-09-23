"use client";

export default function Error({ error }) {
  return <p>Something went wrong: {error.message}</p>;
}
