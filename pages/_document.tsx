import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <style>{loader}</style> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geologica:wght@200&family=Lora&family=Montserrat:ital,wght@0,300;0,600;0,700;1,200;1,400&family=Poppins:wght@300;400;500;700;800&family=Ruslan+Display&family=Sen&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" />
        <link rel="icon" href="/favIcon.svg" />
      </Head>
      <body>
        {/* <div id="globalLoader">
          <img id="loader" src="/logo.png" alt="/logo.png"></img>
        </div> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
