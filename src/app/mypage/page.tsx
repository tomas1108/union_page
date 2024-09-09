import Layout from '@/components/layout/Layout';

import MyPageView from '@/container/mypage/Mypage';
import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <MyPageView />
    </Layout>
  )
};

export default Page;
