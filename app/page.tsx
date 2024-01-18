import ServerCounter from "@/components/ServerCounter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <h1 className="text-4xl">Demo of Convex 1.8 and Next.js RSC</h1>
      <div className="max-w-[640px] leading-6">
        This is a server-side rendered counter with a React Server Component
        using Next.js 14. Then, using{" "}
        <Link
          className="underline cursor-pointer"
          href="https://news.convex.dev/announcing-convex-1-8/"
        >
          Convex 1.18{`'`}s support for preloaded queries and session resumption
        </Link>
        , the client component &quot;resumes&quot; the streaming subscription to
        live server-side data.&nbsp;
        <Link
          className="underline cursor-pointer"
          href="https://github.com/get-convex/preloaded-counter"
        >
          Check out the code on GitHub.
        </Link>
      </div>
      <ServerCounter />
    </main>
  );
}
