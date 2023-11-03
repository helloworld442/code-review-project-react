import { SignInForm } from "../components/AuthPage/SignInForm";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { Layout } from "../components/ui/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <Header />
      <SignInForm />
      <Footer />
    </Layout>
  );
};

export default LoginPage;
