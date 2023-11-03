import Write from "../components/WritePage/page";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { Layout } from "../components/ui/Layout";

const WritePage = () => {
  return (
    <Layout>
      <Header />
      <Write />
      <Footer />
    </Layout>
  );
};

export default WritePage;
