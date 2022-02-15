import React, {FC} from 'react';
import {Card, Layout, Row} from "antd";

import SignInForm from "../components/SignInForm";

const SignIn: FC = () => {
    return (
        <Layout>
            <Row justify="center" align='middle' className='fullScreen'>
                <Card>
                    <SignInForm/>
                </Card>
            </Row>
        </Layout>
    );
};

export default SignIn;