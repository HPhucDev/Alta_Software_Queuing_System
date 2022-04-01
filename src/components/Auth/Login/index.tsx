import  React  ,{useState, FormEvent,useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import {  Form, Input, Button} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { RootState } from '../../../configs/redux';
import { signin, setError } from '../../../configs/redux/actions/authAction';

export interface ILoginProps {
}
type LoginProp = {
  username:string;
  password:string;
}

export function Login (props: ILoginProps) {
  const [account, setAccount] = useState ('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);
  const onFinish = (values: any) => {
    setAccount(values);
    const {email,password}=values;
    if(error) {
      dispatch(setError(''));
    }
    setLoading(true);
    dispatch(signin({email,password}, () => setLoading(false)));
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login__container">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="login__form"
        >
            <Form.Item
              label="Tên đăng nhập *"
              name="email"
              className="login__form--username-title" 
            >
              <Input className="login__form--username-input" />
            </Form.Item>
            <Form.Item
              label="Mật khẩu *"
              name="password"
              className="login__form--password-title" 
            >
              <Input.Password
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className="login__form--password-input" 
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" className="login__form--submit">
                Đăng nhập
              </Button>
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="text" className="login__form--password-forgot"  >Quên mật khẩu? </Button>
            </Form.Item>
        </Form>
    </div>
  );
}
