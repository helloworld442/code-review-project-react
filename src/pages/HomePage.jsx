import Home from "../components/HomePage/page";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { Layout } from "../components/ui/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Home />
      <Footer />
    </Layout>
  );
};

export default HomePage;
