import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { TestContainer } from "./test-container";
import { TestItem } from "./test-item";

type Props = {
  delay: number;
  title: string;
};

export const TestResource = component$<Props>((props) => {
  const resource = useResource$(async () => {
    // pause for 1 second
    if (props.delay > 0)
      await new Promise((resolve) => setTimeout(resolve, props.delay));
    // return an array of 5000 items
    return Array.from({ length: 5000 }, (_, i) => i);
  });

  return (
    <Resource
      value={resource}
      onPending={() => <p>Loading ...</p>}
      onResolved={(data) => (
        <TestContainer>
          {data.map((_, i) => (
            <TestItem key={i} title={props.title} delay={props.delay} />
          ))}
        </TestContainer>
      )}
    />
  );
});
