import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  // the router in this program is only used for

  function getRandomElement(volumes) {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  function handleRandom() {
    const randomVolume = getRandomElement(volumes);
    console.log(randomVolume);
    router.push(`volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li>
            <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleRandom}>
        go to rdm vlm
      </button>
    </>
  );
}

/*

Fn muss mit volumes parametrisiert werden

wir brauchen btn, der onClick hat

*/
