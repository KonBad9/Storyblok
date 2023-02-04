import styles from "./Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav>
      <div>
        <h3>
          <Link href="/">Blog.</Link>
        </h3>
      </div>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
