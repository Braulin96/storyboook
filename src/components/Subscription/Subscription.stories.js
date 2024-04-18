import React from "react";
import { Primary } from "../Button/Button.stories";
import { SecondaryInput } from "../Input/Input.stories";

export default {
  title: "form/subscription",
};

export const PrimarySubscription = () => (
  <>
    <Primary />
    <SecondaryInput/>
  </>
)
