import Question from "../components/QuestionPage/page";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { Layout } from "../components/ui/Layout";

const QuestionPage = () => {
  return (
    <Layout>
      <Header />
      <Question />
      <Footer />
    </Layout>
  );
};

export default QuestionPage;
