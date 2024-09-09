import Layout from '@/components/layout/Layout';

import ExchangeOutView from '@/container/exchange_out/ExchangeOutView';
import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <ExchangeOutView />
    </Layout>
  )
};

export default Page;
