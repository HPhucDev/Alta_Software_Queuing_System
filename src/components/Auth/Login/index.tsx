import * as React from 'react';
import './style.scss';
import {  Form, Input, Button} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
export interface ILoginProps {
}
type LoginProp = {
  username:string;
  password:string;
}

export function Login (props: ILoginProps) {
  const onFinish = (values: any) => {
    console.log('Success:', values);
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
              name="username"
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
