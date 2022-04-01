import * as React from 'react';
import {  Form, Input, Button} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './style.scss';

export interface IResetPasswordProps {
}

export function ResetPassword (props: IResetPasswordProps) {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="resetpassword__form"
        >
            <h1 className="resetpassword__form--title ">Đặt lại mật khẩu mới</h1>
            <Form.Item
              label="Mật khẩu"
              name="password"
              className="resetpassword__form--password-title" 
            >
               <Input.Password
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className="resetpassword__form--password-input" 
              />
            </Form.Item>
            <Form.Item
              label="Nhập lại mật khẩu"
              name="password"
              className="resetpassword__form--confirmpassword-title" 
            >
               <Input.Password
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className="resetpassword__form--confirmpassword-input" 
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="resetpassword__form--tool">
              <Button type="primary" htmlType="submit" className="resetpassword__form--tool-submit">
                Xác nhận
              </Button>
            </Form.Item>
        </Form>
      
    </div>
  );
}
