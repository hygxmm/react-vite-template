import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import s from './style.module.scss';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={s.block}>
      Home
      <Button onClick={() => navigate('/login')}>去登录</Button>
    </div>
  );
};

export default Home;
