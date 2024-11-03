import { Layout } from "antd";
import "./LayoutDefault.css"
import logo from "../../image/logo.png";
import logofold from "../../image/logo-fold.png";
import {SearchOutlined ,MenuFoldOutlined} from "@ant-design/icons" ;
import { useState } from "react";
import Notify from "../../Notify";
import MenuSider from "../../MenuSider/Menu";
import { Outlet } from "react-router-dom";
const { Sider , Content} =Layout;


function LayoutDefault(){
    const [collapsed,setcollapsed] = useState(false)
    return (
        <>
        <Layout className="layout-default">
            <header className="header">
                <div className={"header__logo  "+(collapsed && "header__logo--collapsed")}>
                    <img src={collapsed ? logofold : logo} alt={"lgo"}></img>
                </div>
                <div className="header__nav">
                    <div className="header__nav-left">
                        <div className="header__collapse" onClick={()=> setcollapsed(!collapsed)}>
                        <MenuFoldOutlined />
                        </div>
                        <div className="header__search">
                        <SearchOutlined />
                        </div>
                    </div> 
                    <div className="header__nav-right">
                        <Notify />
                        </div> 
                </div>
            </header>


            <Layout>
                <Sider className="sider" collapsed={collapsed} theme="light">
                    <MenuSider />
                </Sider>

                <Content className="content">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
            </>
    )
}
export default LayoutDefault;