import Head from "next/head";

const SiteTitle = ({ title }) => {
  const titleHeading = `Panorbit | ${title}`;
  return (
    <Head>
      <title>{titleHeading}</title>
      <meta property="og:title" content={`PanOrbit | ${title}`} key={title} />
    </Head>
  );
};

export default SiteTitle;
