import Layout from '@/components/layout/Layout';
import ExchangeInView from '@/container/exchange_in/ExchangeInView';
import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <ExchangeInView />
    </Layout>
  )
};

export default Page;
