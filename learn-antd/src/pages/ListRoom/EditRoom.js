import { Button, Form, Input, InputNumber, message, Modal, notification, Select, Spin, Switch } from "antd";
import {EditOutlined, RestFilled} from "@ant-design/icons"
import { useState } from "react";
import { Updateroom } from "../../severces/roomsSeverces";

const { Option } = Select ;
function EditRoom(props){
    const [Showmodal,setShowmodal] = useState(false);
    const {record ,onReload} = props ;
    const [form] = Form.useForm();
    const [notificationapi, contextHolder] = notification.useNotification();
    const [spinning, setspinning] =useState(false)
    const handleShowmodal = () =>{
        setShowmodal(true)
    }
    const handleCancel =() =>{
        setShowmodal(false)
        form.resetFields()
    }

      const rules =[
          {
              required: true,
              message: 'Chỗ này không được để trống', 
          },
      ]
  
  
      const handelesubmit  = async (values) => {
        setspinning(true)
          const response = await Updateroom( record.id ,values)
          console.log(response)

          setTimeout(()=>{
            if(response){
                notificationapi.success({
                  message:'cập  nhật thành công',
                  description:`bạn đã cập nhật thành công phòng ${record.name}`
                });
                setShowmodal(false)
                onReload()
              }
              else{
                notification.error({
                  message:'cập không nhật thành công',
                  description:`bạn đã cập nhật không thành công phòng ${record.name}`
                });
                
              }
              setspinning(false)
          },3000)
         
      }

    return(
        <>
        {contextHolder}
        <Button type="primary" size="small" onClick={handleShowmodal}>
            <EditOutlined />
        </Button>
        <Modal open={Showmodal} onCancel={handleCancel} title="Form" footer={null}>
            <Spin spinning={spinning} tip="đang cập nhật" >
            <Form name="create-room" onFinish={handelesubmit} form={form} initialValues={record}>
        <Form.Item
      label="Tên Phòng"
      name="name"
      rules={rules}
    >
      <Input />
    </Form.Item>
    
   

    <Form.Item
      label="Số lượng giường"
      name="quatitybed"
      rules={rules}
    >
      <InputNumber min={1}  />
    </Form.Item>
    
    <Form.Item
      label="Số người tối đa"
      name="quatitypeople"
      rules={rules}
    >
      <InputNumber min={1} />
    </Form.Item>
       
    <Form.Item 
      label="yêu cầu"
      name="yeu cầu"
    >
      <Select  
      Style ={{
          width: "100px"
        }}
        mode="multiple"
        allowClear>
      <Option value ="wifi">wifi</Option>  
      <Option value ="nóng lạnh">nóng lạnh</Option>  
      <Option value ="điều hòa">Điều hòa</Option>   
      </Select>
    
    </Form.Item>
       

    <Form.Item
      label="Mô tả"
      name="decription"
  
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item valuePropName="checked"
    label="trạng thái"
    name="status"
    >
    <Switch />
    </Form.Item>

    <Form.Item valuePropName="checked"
    label="Loại Phòng"
    name="typeroom"
    >
    <Switch checkedChildren="VIP" unCheckedChildren="thường"/>
    </Form.Item>


    <Form.Item>
      <Button type="primary" htmlType="Tạo mới">
        Cập nhật
      </Button>
    </Form.Item>
        </Form>
            </Spin>
        
        </Modal>
        </>
    )
}
export default EditRoom ;
