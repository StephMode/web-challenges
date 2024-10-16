import React from "react";
import { volumes } from "@/lib/data";
import Link from "next/link";

function VolumeDetail() {
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  const volume = volumes[volumeIndex];

  const { title, description, cover, books } = volume;

  return (
    <main>
      <Link href="/volumes">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  );
}

export default VolumeDetail;
