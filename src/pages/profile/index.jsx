import Header from "@/components/header";
import SiteTitle from "@/components/common/siteTitle";
import Layout from "@/components/layout";
import Profile from "@/components/profile";
function UserProfile() {
    return ( <>
    <SiteTitle title='profile' />
    <Layout>
        <Header heading={"Profile"} />
        <Profile />
    </Layout>
    </> );
}

export default UserProfile;