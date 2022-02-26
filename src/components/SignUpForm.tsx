import React, {FC, FormEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Form, Input} from 'antd';

import {useTypedSelector} from '../hooks/useTypedSelector';
import {AuthActionCreator} from '../store/reducers/auth/actionCreator';
import {rules} from '../utils/rules';


const SignUpForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.authReducer)
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const submit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(AuthActionCreator.setIsLoading(true));
        dispatch(AuthActionCreator.signUp({email,password,firstName}));
    }

    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>{error}</div>}
            <Form.Item
                label='Name'
                name='name'
                rules={[rules.required('Please input your email')]}
            >
                <Input value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label='Email'
                name='email'
                rules={[rules.required('Please input your email')]}
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
            <Form.Item>
                <Button
                    type='primary'
                    htmlType='submit'
                    loading={isLoading}
                    onClick={submit}
                >
                    {isLoading ? 'Loading...' : 'SignUp'}
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignUpForm;