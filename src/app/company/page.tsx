import Layout from "@/components/layout/Layout";

import Company from "@/container/company/CompanyView";

import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <Company />
    </Layout>
  );
};

export default Page;
