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
      <p className="">
        The counter is {counter ?? "SHOULD NEVER SEE WITH RSC!"}
        <button
          onClick={() => increment()}
          className="cursor-pointer block border-2 rounded p-4 bg-orange-300"
        >
          Increment
        </button>
      </p>
    </>
  );
}
