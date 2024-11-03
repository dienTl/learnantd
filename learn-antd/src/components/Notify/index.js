import { Badge, Button, Dropdown} from "antd";
import {BellOutlined } from "@ant-design/icons"
import "./notify.css"

function notify(){
    const items = [
        {
            label: <div className="notify__item">
              <div className="notify__item-icon">
                <BellOutlined />
              </div>
              <div className="notify__item-content">
                <div className="notify__item-title">
                  Item1
                </div>
                <div className="notify__item-time">
                8 phút trước
              </div>
              </div>
            </div>,
          key: '1',
        },
        {
          label: "item 2",
          key: '2',
        },
        {
            label: "item 3",
            key: '3',
          },
          {
            label: "item 4",
            key: '4',
          },
          {
            label: "item 5",
            key: '5',
          },
          {
            label: "item 6",
            key: '6',
          },
          {
            label: "item 7",
            key: '7',
          },
          {
            label: "item 8",
            key: '8',
          },
        
      ];
    return (
        <>
        <Dropdown 
            menu={{ 
                items,
                 }} 
                 trigger={['click']}
                 dropdownRender={(menu) =>{
                    return(
                        <>
                        <div className="notify__dropdown">
                            <div className="notify__header">
                                <div className="notify__header-title">
                                <BellOutlined /> notification
                                </div>
                                <Button type="Link">view all</Button>
                            </div>
                            <div className="notify__body">
                                    {menu}
                            </div>
                        </div>
                        </>
                    )
                       
                        
                 }}
                 >
                  <Badge dot={true}>
                  <Button type="text"><BellOutlined /></Button>  
                  </Badge>
                 
               
         </Dropdown>
         </>
    )
}
export default notify ;