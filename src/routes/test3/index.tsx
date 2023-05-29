import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { TestResource } from "./test-resource";

export default component$(() => {
  return (
    <>
      <TestResource title={"List 1"} delay={1000} />
      <TestResource title={"List 2"} delay={1000} />
      <TestResource title={"List 3"} delay={0} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik CSS Test 3",
};
