# Convex 1.18+ and Next.js RSC Demo

This is an example of using React Server Components
together with client components and Convex 1.18. Convex
supports a "preloaded query", which allows an initial value
to be rendered server-side and then the subscription to
changing values to be seamlessly resumed in the loaded SPA
using Convex's existing reactive query capabilities.

See the components in the `./components` directory
to understand how it's done.

Running demo:

https://labs.convex.dev/preloaded-counter
