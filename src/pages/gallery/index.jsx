import Header from "@/components/header";
import SiteTitle from "@/components/common/siteTitle";
import Layout from "@/components/layout";
import { Grid, Typography } from "@mui/material";
import ComingSoon from "@/components/common/comingSoon";
function Gallery() {
  return (
    <>
      <SiteTitle title="gallery" />
      <Layout>
        <Header heading={"Gallery"} />
        <ComingSoon />
      </Layout>
    </>
  );
}

export default Gallery;
