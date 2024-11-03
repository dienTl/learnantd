import { Form, Input ,Button, InputNumber ,Select, Switch, message} from "antd"
import { createroom } from "../../severces/roomsSeverces"
const {Option} = Select
function CreateRoom() {

  const [form] = Form.useForm();
  const [messageApi , contextHolder] = message.useMessage();
    const rules =[
        {
            required: true,
            message: 'Chỗ này không được để trống', 
        },
    ]


    const handelesubmit  = async (values) => {
        const response = await createroom(values)
       
        console.log(response)
        if(response){
          form.resetFields();
          messageApi.open({
            type:'success',
            content:'tạo mới thành công',
            duration :2,
          });
        }
        else{
          messageApi.open({
            type:'error',
            content:'tạo mới không thành công',
            duration:10,
          });
        }
    }
    return(
        <>
        {contextHolder}
        <h2>Tạo phòng mới</h2>

        <Form name="create-room" onFinish={handelesubmit} form={form}>
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
        Submit
      </Button>
    </Form.Item>
        </Form>
        </>
    )
}
export default CreateRoom