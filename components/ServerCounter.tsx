import { preloadQuery } from "convex/nextjs";
import { api } from "../convex/_generated/api";
import ClientCounter from "./ClientCounter";

export default async function ServerCounter() {
  const preloadedValue = await preloadQuery(api.counter.get);
  return <ClientCounter preloadedCounter={preloadedValue} />;
}
