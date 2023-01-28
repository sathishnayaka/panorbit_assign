import Header from "@/components/header";
import SiteTitle from "@/components/common/siteTitle";
import Layout from "@/components/layout";
import ComingSoon from "@/components/common/comingSoon";
function Posts() {
  return (
    <>
      <SiteTitle title="posts" />
      <Layout>
        <Header heading={"Posts"} />
        <ComingSoon />
      </Layout>
    </>
  );
}

export default Posts;
