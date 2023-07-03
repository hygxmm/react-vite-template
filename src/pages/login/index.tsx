import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button type="default" onClick={() => navigate(-1)}>
        返回
      </Button>
      <div>登录页</div>
    </div>
  );
};
export default Login;
