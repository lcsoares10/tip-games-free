import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Search from "src/components/search";
import HeroList from "@/components/heroList";

export default function Home({ games }) {
  return (
    <div>
      <nav className="p-8 bg-red-500">
        <Search />
      </nav>
      <HeroList listGames={games} />
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://www.freetogame.com/api/games");
  const games = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      games,
    },
  };
}
