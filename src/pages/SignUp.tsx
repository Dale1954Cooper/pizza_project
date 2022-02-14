import React, {FC} from 'react';
import {Card, Layout, Row} from "antd";

import SignUpForm from "../components/SignUpForm";


const SignUp: FC = () => {
    return (
        <Layout >
            <Row justify="center" align='middle' className='fullScreen'>
                <Card>
                    <SignUpForm/>
                </Card>
            </Row>
        </Layout>
    );
};

export default SignUp;