import Head from "next/head";
import Image from "next/image";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Api Dashboard</title>
        <link
          rel="icon"
          href="https://img1.digitallocker.gov.in/ndh/smart/images/apisetu_icon.png"
        />
      </Head>
      <Dashboard />
    </div>
  );
};

export default Home;
