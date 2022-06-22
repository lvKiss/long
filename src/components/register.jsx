import {
    Form,
    Input,
    Button,
  } from 'antd';
  import  '../login.css'
  import { LockOutlined, UserOutlined } from '@ant-design/icons';
  import { useState } from 'react';
  const Register = () => {
    const [form] = Form.useForm();
  
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    return (
      <Form className="login-form">
        <Form.Item
          name="userName"
          rules={[
            {
              
              message: 'The input is not valid E-mail!',
            },
            {
                value: null,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input className='input-container' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"  />
        </Form.Item>
  
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input type={'password'} className='input-container' prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="password"/>
        </Form.Item>
  
        <Form.Item
          name="confirm password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
  
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input type={'password'} className='input-container' prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="confirm password"/>
        </Form.Item>
  
        <Form.Item
          name="code"
          rules={[
            {
              required: true,
              message: 'Please input your code!',
              whitespace: true,
            },
          ]}
        >
          <Input className='input-container' prefix={<LockOutlined className="site-form-item-icon" />}placeholder="Enter code" />
        </Form.Item>
        <Form.Item>
        <Button className='login-form-button' type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      </Form>
    );
  };
  
  export default Register;