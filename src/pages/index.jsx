import Home from "../components/home";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../components/shared/layouts/Header";
import Layout from "../components/shared/layouts/Layout";
const HomePage = () => {
  const { logout } = useAuth0();

  return (
    <Layout>
      <Home />
    </Layout>
  );
};
export default HomePage;
