import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./test-item.css?inline";

type Props = {
  delay: number;
  title: string;
};

export const TestItem = component$<Props>((props) => {
  useStyles$(styles);

  return (
    <div class="test-item">
      <span>
        Test from {props.title} delays was {props.delay}ms
      </span>
    </div>
  );
});
