import Detail from "../components/DetailPage/page";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { Layout } from "../components/ui/Layout";

const DetailPage = () => {
  return (
    <Layout>
      <Header />
      <Detail />
      <Footer />
    </Layout>
  );
};

export default DetailPage;
