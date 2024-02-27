import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix + Vite + Vercel" },
    { name: "description", content: "Welcome to Remix + Vite + Vercel!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix + Vite + Vercel</h1>

      <p>testing a push deploy through Git</p>
    </div>
  );
}
