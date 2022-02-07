import React, {FC} from 'react';
import {Layout} from "antd";

import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";


const App: FC = () => {
    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRoutes/>
            </Layout.Content>
        </Layout>
    );
};

export default App;