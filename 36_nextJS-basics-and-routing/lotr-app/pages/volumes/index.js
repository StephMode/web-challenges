import { introduction } from "@/lib/data";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <h1>All Volumes</h1>
      <p>{introduction}</p>
      <ul>
        <Link href="/volumes/the-fellowship-of-the-ring" title="Fellowship">
          Fellowship of the Bling
        </Link>
        <Link href="/volumes/the-two-towers" title="Towers">
          The two towers
        </Link>
      </ul>
    </>
  );
}
