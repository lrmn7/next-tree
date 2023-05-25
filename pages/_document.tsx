/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme={"pastel"}>
      <Head>
        {/* Tidak ada elemen <title> di sini */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
