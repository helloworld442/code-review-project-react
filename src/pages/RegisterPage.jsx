import SignUpForm from "../components/AuthPage/SignUpForm";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { Layout } from "../components/ui/Layout";
import { ValidateProvider } from "../provider/recoil/provider";

const RegisterPage = () => {
  return (
    <Layout>
      <Header />
      <ValidateProvider>
        <SignUpForm />
      </ValidateProvider>
      <Footer />
    </Layout>
  );
};

export default RegisterPage;
