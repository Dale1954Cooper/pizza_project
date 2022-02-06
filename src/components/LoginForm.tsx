import React, {FC, useState} from 'react';
import {Form, Input, Button} from 'antd';

const LoginForm: FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Form>
            <Form.Item
                label='Email'
                name='email'
            >
                <Input value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label='Password'
                name='password'
            >
                <Input.Password value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;