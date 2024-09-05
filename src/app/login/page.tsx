import Layout from '@/components/layout/Layout';
import LoginPage from '@/container/form/login/LoginView';

import { NextPage } from 'next';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <LoginPage />
    </Layout>
  )
};

export default Page;
