import React, {FC, FormEvent, useState} from 'react';
import {Button, Form, Input, Select} from "antd";

import {useTypedSelector} from "../hooks/useTypedSelector";
import {rules} from "../utils/rules";
import {useActions} from "../hooks/useActions";
import {AuthActionCreator} from "../store/reducers/auth/actionCreator";


const SignUpForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.authReducer)
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const {signUp} = useActions()

    const submit = (e: FormEvent) => {
        e.preventDefault()
        signUp({firstName, email, password})
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
            <Form.Item
                label='Confirm password'
                name='Confirm password'
                rules={[rules.required('Please input your password')]}
            >
                <Input.Password value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
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