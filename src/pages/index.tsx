import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Search from "src/components/search";

export default function Home() {
  return (
    <div>
      <nav className="p-8 bg-red-500">
        <Search />
      </nav>
    </div>
  );
}
