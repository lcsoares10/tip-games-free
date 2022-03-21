import Search from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Search",
  component: Search,
  args: {
    placeholder: "Digite aqui",
  },
  argTypes: {
    placeholder: {
      type: "string",
    },
  },
} as ComponentMeta<typeof Search>;

export const Primary: ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
);
