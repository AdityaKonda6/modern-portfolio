
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const fontStyles = `
  @font-face {
    font-family: 'Sora';
    font-style: normal;
    font-weight: 100 800;
    src: url('/path-to-your-fonts/Sora-Regular.woff2') format('woff2');
    /* Add other font formats and sources if needed */
  }

  :root {
    --font-sora: 'Sora', sans-serif;
  }
`;
Head({ children: <style>{fontStyles}</style> });
const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Ethan Smith | Portfolio</title>
        <meta
          name="description"
          content="Ethan Smith is a Full-stack web developer with 10+ years of experience."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Sanidhya Kumar Verma" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
