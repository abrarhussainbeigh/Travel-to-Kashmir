// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404 - Page Not Found</h1>
      <p style={{ marginBottom: "2rem" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <a style={{
          background: "#0070f3",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none"
        }}>
          Go Back to Home
        </a>
      </Link>
    </div>
  );
}

