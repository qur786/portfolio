import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { MobileCustomAppBar } from ".";

export default {
  title: "MobileCustomAppBar",
  component: MobileCustomAppBar,
} as ComponentMeta<typeof MobileCustomAppBar>;

export const Template: ComponentStory<typeof MobileCustomAppBar> = () => (
  <MobileCustomAppBar />
);
