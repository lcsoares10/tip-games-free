import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Search from "@/components/search";

export default function Home() {
  return (
    <div>
      <nav className="p-8">
        <Search />
      </nav>
    </div>
  );
}
