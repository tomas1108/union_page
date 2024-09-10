import Layout from '@/components/layout/Layout';
import TradingPage from '@/components/trading/TradingMainView';
import BtcView from '@/container/btc/BtcView';
import LoginPage from '@/container/form/login/LoginView';

import { NextPage } from 'next';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (

      <BtcView />
    
  )
};

export default Page;
