import React from "react";
import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

function VolumeDetail() {
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  const volume = volumes[volumeIndex];

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      ></Image>
    </>
  );
}

export default VolumeDetail;
