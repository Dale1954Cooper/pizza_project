import React, {FC} from 'react';
import {Card, Layout, Row} from "antd";

import LoginForm from "../components/LoginForm";

const Login: FC = () => {
    return (
        <Layout>
            <Row justify="center" align='middle' className='fullScreen'>
                <Card>
                    <LoginForm/>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;