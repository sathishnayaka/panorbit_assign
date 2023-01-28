import Header from "@/components/header";
import SiteTitle from "@/components/common/siteTitle";
import Layout from "@/components/layout";
import ComingSoon from "@/components/common/comingSoon";
function Todo() {
  return (
    <>
      <SiteTitle title="todo" />
      <Layout>
        <Header heading={"Todo"} />
        <ComingSoon />
      </Layout>
    </>
  );
}

export default Todo;
