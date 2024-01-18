"use client";
import {
  Preloaded,
  usePreloadedQuery,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "../convex/_generated/api";
import {} from "convex/react";

export default function ClientCounter(props: {
  preloadedCounter: Preloaded<typeof api.counter.get>;
}) {
  const increment = useMutation(api.counter.increment);
  const counter = usePreloadedQuery(props.preloadedCounter);
  return (
    <>
      <p className="text-xl">
        The current counter is{" "}
        <strong>{counter ?? "SHOULD NEVER SEE WITH RSC!"}</strong>
      </p>
      <p>
        <button
          onClick={() => increment()}
          className="cursor-pointer block my-3 border-2 rounded p-4 bg-orange-200 dark:bg-orange-900 dark:text-white"
        >
          Increment it!
        </button>
      </p>
    </>
  );
}
