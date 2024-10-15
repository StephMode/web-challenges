import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>LOTR</h1>
      <Link href="/volumes" title="Show all Volumes">
        Show all Volumes
      </Link>
    </div>
  );
}
