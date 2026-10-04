import Link from "next/link";

export default function Nav() {
  return (
    <nav className="my-3">
      <ul className="flex gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
       
      </ul>
    </nav>
  );
}
