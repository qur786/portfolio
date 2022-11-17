import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { CustomAppBar } from ".";

export default {
  title: "CustomAppBar",
  component: CustomAppBar,
} as ComponentMeta<typeof CustomAppBar>;

export const Template: ComponentStory<typeof CustomAppBar> = () => (
  <CustomAppBar />
);
