import { component$ } from "@builder.io/qwik";
import "./app.css";
import { Items } from "./Items.tsx";

export const App = component$(() => {
  return <Items />;
});
