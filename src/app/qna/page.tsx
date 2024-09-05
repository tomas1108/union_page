import Layout from "@/components/layout/Layout";
import QnaView from "@/container/qna/QnaView";


import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <QnaView />
    </Layout>
  );
};

export default Page;
