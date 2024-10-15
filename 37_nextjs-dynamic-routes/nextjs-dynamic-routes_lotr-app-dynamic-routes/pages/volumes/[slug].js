import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router.js";

/* Comments on approach to solution

1) Problem: 

We need to refactor the static, single pages for the volumes in a way so that [slug].js
my render the content of all three dynamically.

2) Plan & Steps:

1. utiilze useRouter hook

2. initialze destrucutred slug with router.query as value


*/

export default function VolumeDetail() {
  // Step 1: add use router hook here
  const router = useRouter();
  // dieser hook zieht sich programmatisch den benötigten Pfad in the Datenquelle, wenn er genutzt wird
  // hier wird der router in der const router gestored

  // Step 2: add const {slug} = router.query
  const { slug } = router.query;
  // hier findet der hook Anwendung und ermöglicht das Suchen im Zielarray nach dem slug === key bei next

  // Step 3: change this to => volumes.slug === slug to make it dynamic
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  // Erklärung: wir iterieren über das ganze arr, damit erstellen wir ein obj, über das mit slug abgeglichen werden kann
  // Der wird damit als volumeIndex gespeichert und somit für das weitere Programm verfügbar gemacht

  // Step 4: from here on, we should leave the code as is

  const volume = volumes[volumeIndex];
  // hier werden die values eines obj, die über einen slug identifiziert wurden, und konkret mit dem volumeIndex adressiert wurden, in volume gespeichert
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;
  // hier werden dann die values eines obj im array of obj via slug > volumeIndex nochmal destructured, damit sie im return statement
  // für's jeweilige rendering genutzt werden können

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
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
      />
      <div>
        {previousVolume ? (
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        ) : null}
      </div>
      <div>
        {nextVolume ? (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        ) : null}
      </div>
    </>
  );
}
