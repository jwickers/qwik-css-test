import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import styles from "./test-container.css?inline";

export const TestContainer = component$(() => {
  useStyles$(styles);

  return (
    <div class="test-container-slotted">
      <Slot />
    </div>
  );
});
