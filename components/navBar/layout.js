import React from "react";
import NavBar from "./nav";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <Head>
          {/* Title */}
          <title>Sunsol | The Imaging Center | Home</title>

          {/* Meta Description */}
          <meta
            name="description"
            content="Welcome to The Imaging Center - a trusted radiology testing facility offering a full range of diagnostic and screening services for patients. We prioritize affordability without compromising on quality, providing accurate and timely results to help our patients make informed healthcare decisions."
          />

          {/* Meta Keywords (optional) */}
          {/* Note: Meta keywords are no longer used by major search engines for SEO */}

          {/* Robots meta tag (optional) */}
          <meta name="robots" content="index, follow" />

          {/* Canonical link (optional) */}
          <link rel="canonical" href="sunsol-africa-yqxi.vercel.app" />

          {/* Viewport meta tag */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Open Graph meta tags (optional) */}
          <meta name="og:title" content="The Imaging Center at Wolf River" />
          <meta name="og:image" content="images/logo.png" />
          <meta
            name="og:description"
            content="Welcome to The Imaging Center - a trusted radiology testing facility offering a full range of diagnostic and screening services for patients. We prioritize affordability without compromising on quality, providing accurate and timely results to help our patients make informed healthcare decisions."
          />
        </Head>
      </Head>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
