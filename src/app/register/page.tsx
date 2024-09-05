import Layout from '@/components/layout/Layout';
import LoginPage from '@/container/form/login/LoginView';
import RegisterForm from '@/container/form/register/RegisterView';

import { NextPage } from 'next';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  )
};

export default Page;
