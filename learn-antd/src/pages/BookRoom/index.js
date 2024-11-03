import {Input ,Row ,Col ,Button , DatePicker, Checkbox, Space, Radio, Select , } from "antd";
import { useState } from "react";
import { bookRoom } from "../../severces/bookRoomServeces";
const { RangePicker } = DatePicker;
function BookRoom(){

    const [data , setdata] = useState({
        time : "14h ",
    })
    const optionstime =[]
    for( let i = 7 ; i <=24 ; i++){
        optionstime.push({
            value : i  > 9 ? `${i} giờ` : `0${i} giờ`,
            label : i  > 9 ? `${i} giờ` : `0${i} giờ`,
        })
    }
    const handlechangeCheckbox = (e) =>{
        const object = {
            ...data,
            services : e
        };
        setdata(object) 
    }
    const handlechangeselect = (e) =>{
        const object = {
            ...data,
            time : e,       
        };
        setdata(object) 
    }
    const handleChangedate = (dates , dateStrings) =>{
        const object = {
            ...data,
            date : dateStrings
        };
        setdata(object)
    }
    const handlechangeInput = (e) =>{ 
        const object = {
            ...data,
            [e.target.name] : e.target.value
        }
        
        setdata(object)
    }
    const handelesubmit = async() =>{
        const response =await bookRoom(data);
        console.log(response);
        if(response){
            alert("chúc mừng bạn đã đặt phòng thành công");
        }
        else{
            alert("xin lỗi mời bạn đặt phòng lại")
        } 
    };
    return(
        <>
        <h2>Đặt phòng</h2>

       
            <Row gutter={[20 ,20  ]}>
                <Col span={24}>
                <p>Họ tên</p>
            <Input name="Fullname" placeholder="Basic usage" onChange={handlechangeInput}/>
            </Col>
            <Col span={12}>
                <p>số điện thoại</p>
            <Input name="phone" placeholder="123123123"  onChange={handlechangeInput}/>
            </Col>
            <Col span={12}>
                <p>email</p>
            <Input name="email" placeholder="dsahdk@gmail.com"  onChange={handlechangeInput}/>
            </Col>

            <Col span={12}>
                <p>dịch vụ thêm</p>
            <Checkbox.Group  onChange={handlechangeCheckbox}>
                <Space direction="vertical" >
            <Checkbox value="thuê xe máy">thuê xe máy</Checkbox>
            <Checkbox value="thuê oto 4 chỗ">thuê oto 4 chỗ</Checkbox>
            <Checkbox value="thuê oto 7 chỗ">thuê oto 7 chỗ</Checkbox>
            <Checkbox value="thuê oto 14 chỗ">thuê oto 14 chỗ</Checkbox>
            </Space>
            </Checkbox.Group>
            </Col>

            <Col span={12}>
                <p>Quà tặng</p>
            <Radio.Group name="gift" onChange={handlechangeInput}>
                <Space direction="vertical" >
                <Radio value="áo cộc">áo cộc </Radio>
                <Radio value="mũ">mũ</Radio>
                <Radio value="kem chống nắng">kem chống nắng</Radio>
            </Space>
            </Radio.Group>
            </Col>

            <Col span={12}>
                <p>dịch vụ thêm</p>
                <RangePicker placeholder={["Checkin" , "Checkout"]} format="DD/MM/YYYY" onChange={handleChangedate} />
            </Col>


            <Col span={12}>
                <p>giờ nhận phòng</p>
                <Select options={optionstime} style={{
                    width : "100%",
                }}
                defaultValue={data.time}
                onChange={handlechangeselect}
                ></Select>
            </Col>

            <Col span={24}>
           <Button type="primary" onClick={handelesubmit}>Đặt Phòng</Button>
            </Col>
            </Row>
       
        </>
    )
}
export default BookRoom;