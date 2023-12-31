import SignUpForm from "../components/AuthPage/SignUpForm";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { Layout } from "../components/ui/Layout";

const RegisterPage = () => {
  return (
    <Layout>
      <Header />
      <SignUpForm />
      <Footer />
    </Layout>
  );
};

export default RegisterPage;
