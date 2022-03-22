import HeroList from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "HeroList",
  component: HeroList,
  args: {
    listGames: [
      {
        developer: "Lucas",
        freetogame_profile_url: "string",
        game_url: "string",
        genre: "string",
        id: 2,
        platform: "string",
        publisher: "string",
        release_date: "string",
        short_description: "string",
        thumbnail: "string",
        title: "paixão de Cristo",
      },
      {
        developer: "Lucas",
        freetogame_profile_url: "string",
        game_url: "string",
        genre: "string",
        id: 2,
        platform: "string",
        publisher: "string",
        release_date: "string",
        short_description: "string",
        thumbnail: "string",
        title: "Filme do Pele",
      },
    ],
  },
} as ComponentMeta<typeof HeroList>;

export const Primary: ComponentStory<typeof HeroList> = (args) => (
  <HeroList {...args} />
);
