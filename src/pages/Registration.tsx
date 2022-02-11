import React, {FC} from 'react';
import {Card, Layout, Row} from "antd";

import RegistrationForm from "../components/RegistrationForm";


const Registration: FC = () => {
    return (
        <Layout >
            <Row justify="center" align='middle' className='fullScreen'>
                <Card>
                    <RegistrationForm/>
                </Card>
            </Row>
        </Layout>
    );
};

export default Registration;