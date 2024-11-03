import { Menu } from "antd";
import {DownOutlined,PlusCircleOutlined} from "@ant-design/icons"
import { Children } from "react";
import { Link } from "react-router-dom";


function MenuSider(){
    const items =[
        {
            label : "Menu 1",
            icon: <DownOutlined />,
            key:"menu-1",
            children :[
                {
                    label : <Link to="/">Dashboard</Link>,
                    key:"/",
                    },
                {
                    label : "Menu 1 - 2",
                    key:"menu-1-2",
                    },
                {
                    label : "Menu 1 - 3",
                    key:"menu-1-3",
                    }
            ]
        },
        {
            label : "Menu 2",
            icon: <DownOutlined />,
            key:"menu-2",
            children :[
                {
                    label : "Menu 2 - 1",
                    key:"menu-2-1",
                    },
                {
                    label : "Menu 2 - 2",
                    key:"menu-2-2",
                    },
                {
                    label : "Menu 2 - 3",
                    key:"menu-2-3",
                    }
            ]
        },
        {
            label : "Menu 3",
            icon: <DownOutlined />,
            key:"menu-3",
        },
        {
            label : <Link to="/book-room">book-room</Link>,
            icon: <DownOutlined />,
            key:"/book-room",
        }  ,
        {
            label : <Link to="/Create-Room">Create-room</Link>,
            icon: <PlusCircleOutlined />,
            key:"/book-room",
        }        ,
        {
            label : <Link to="/List-Room">List-room</Link>,
            icon: <PlusCircleOutlined />,
            key:"/List-room",
        }        
    
        
    ]
    return(
        <>
        <Menu
      mode="inline"
      items={items}
      defaultSelectedKeys={["/"]} defaultOpenKeys={["menu-1"]}
    />
        </>
    )
}
export default MenuSider ;