import Layout from "@/components/layout/Layout";

import DepositSection from "@/container/section/deposit/DepositSection";

import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <DepositSection />
    </Layout>
  );
};

export default Page;
