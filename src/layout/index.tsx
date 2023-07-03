import { Outlet } from 'react-router-dom';
import { Button } from 'antd';
import useAppConfigStore from '@/store/index';

import s from './style.module.scss';

const Layout = () => {
  const appName = useAppConfigStore<string>((state) => state.appName);

  return (
    <div className={s.page}>
      <div className={s.head}>
        <div>{appName}</div>
        <div>
          <Button type="link">退出</Button>
        </div>
      </div>
      <div className={s.main}>
        <div className={s.side}></div>
        <div className={s.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
