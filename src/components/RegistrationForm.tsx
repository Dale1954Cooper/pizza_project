import React, {FC, useState} from 'react';
import {Button, Form, Input, Select} from "antd";

const {Option} = Select;

import {useTypedSelector} from "../hooks/useTypedSelector";
import {rules} from "../utils/rules";
import {GenderEnum} from "../models/GenderEnum";
import {useActions} from "../hooks/useActions";


const RegistrationForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.authReducer)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const {registration} = useActions()

    const submit = () => {
        registration(name, email, password)
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
                <Input value={name} onChange={e => setName(e.target.value)}/>
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
                <Select defaultValue={GenderEnum.MALE} style={{width: 120}}>
                    {(Object.keys(GenderEnum) as Array<keyof typeof GenderEnum>).map(gender =>
                        <Option key={gender} value={gender}>{gender.toLowerCase()}</Option>
                    )}
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' loading={isLoading}>
                    Create
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegistrationForm;