import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen p-6 text-center">
      <Head>
        <title>Next Example</title>
        <meta
          name="description"
          content="This app will cover nextjs, tailwindcss, typescript, eslint and prettier."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl">
        Welcome to <span className="h-1 p-1 text-sky-800">Next Example</span>
      </h1>
    </div>
  );
}
