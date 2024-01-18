import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  handler: async (ctx) => {
    const counter = await ctx.db.query("counter").unique();
    return counter?.value ?? 0;
  },
});

export const increment = mutation({
  handler: async (ctx) => {
    const counter = await ctx.db.query("counter").unique();
    if (counter) {
      await ctx.db.patch(counter._id, {
        value: counter.value + 1,
      });
    } else {
      await ctx.db.insert("counter", {
        value: 1,
      });
    }
  },
});
