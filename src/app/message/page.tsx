import Layout from '@/components/layout/Layout';
import MessageView from '@/container/message/MessageView';
import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <MessageView />
    </Layout>
  )
};

export default Page;
