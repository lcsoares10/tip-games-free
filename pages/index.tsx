import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </div>
  );
}
