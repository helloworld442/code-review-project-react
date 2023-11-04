import Forem from "../components/ForemPage/page";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { Layout } from "../components/ui/Layout";

const ForemPage = () => {
  return (
    <Layout>
      <Header />
      <Forem />
      <Footer />
    </Layout>
  );
};

export default ForemPage;
