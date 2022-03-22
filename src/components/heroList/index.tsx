import React, { useEffect, useState } from "react";

type PropsListGames = {
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
  title: string;
};
type PropsHeroList = {
  listGames: Array<PropsListGames>;
};

const HeroList: React.FC<PropsHeroList> = ({ children, listGames }) => {
  const [pageNumber, setPageNumber] = useState<Array<number>>([]);
  const [page, setPage] = useState(1);

  const [gameStart, setGameStart] = useState(0);
  const [gameEnd, setGameEnd] = useState(10);

  useEffect(() => {
    setGameStart(page === 1 ? 0 : page * 10 - 10);
    setGameEnd(page === 1 ? 10 : page * 10);
  }, [page]);

  useEffect(() => {
    const pages = () => {
      let arrayPages = [];
      for (var i = 1; i < listGames.length / 10; i++) arrayPages.push(i);
      return arrayPages;
    };
    setPageNumber(pages);
  }, []);

  console.log({ gameStart, gameEnd, page });
  return (
    <div className="flex flex-col p4">
      {listGames?.map(
        (game, key) =>
          key >= gameStart &&
          key <= gameEnd && (
            <div className="p-2 m-2 bg-blue-100">{game?.title}</div>
          )
      )}
      <div>
        {pageNumber?.map((item) => (
          <button
            onClick={() => {
              setPage(item);
            }}
            className="bg-red-200 m-2 p-2 "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroList;
