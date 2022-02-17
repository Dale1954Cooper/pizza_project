import React, {FC, FormEvent, useState} from 'react';
import {Form, Input, Button} from 'antd';

import {useTypedSelector} from "../hooks/useTypedSelector";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreator} from "../store/reducers/auth/actionCreator";

const SignIn: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.authReducer);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const submit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(AuthActionCreator.setIsLoading(true));
        dispatch(AuthActionCreator.signIn({email, password}));
    }

    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>{error}</div>}
            <Form.Item
                label='Email'
                name='email'
                rules={[rules.required('Please input your username')]}
            >
                <Input value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label='Password'
                name='password'
                rules={[rules.required('Please input your password')]}
            >
                <Input.Password value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button
                    type='primary'
                    htmlType='submit'
                    loading={isLoading}
                    onClick={submit}
                >
                    {isLoading ? 'Loading...' : 'Submit'}
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignIn;