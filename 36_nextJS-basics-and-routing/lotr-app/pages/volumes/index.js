import { introduction } from "@/lib/data";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <h1>All Volumes</h1>
      <p>{introduction}</p>
      <Link href="/volumes/the-fellowship-of-the-ring" title="Fellowship">
        Fellowship of the Bling
      </Link>
    </>
  );
}
