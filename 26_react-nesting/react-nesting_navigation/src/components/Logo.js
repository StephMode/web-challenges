import Image from "./Image.js";
import Link from "./Link.js";
import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <Link>
      <Image src={logo} alt={"logo"} />
    </Link>
  );
}
