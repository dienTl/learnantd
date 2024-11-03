import { Carousel, Col,Collapse,Row,Image, Tabs, QRCode, Rate } from "antd";
import "./LearnGrid.css"
import CardItem from "../CartItem";
import { children } from "react";
import Slide from "./Slide";
const {Panel} = Collapse ;

function LearnGrid(){

    const list = [
        {
            id : 1 ,
            title:"logo 1 là gì" ,
            discription :"logo 1 là ..."
        },
        {
            id : 2 ,
            title:"logo 2 là gì" ,
            discription :"logo 2 là ..."
        },
        {
            id : 3 ,
            title:"logo 3 là gì" ,
            discription :"logo 3 là ..."
        },
    ]
    const items = [
        {
            key :1 ,
            label : 'tab 1' ,
            children :<>    
                <Slide />
            </>,
        },{
            key :2 ,
            label : 'tab 2' ,
            children :' nội dung tab 2 '
        },{
            key :3 ,
            label : 'tab 3' ,
            children :' nội dung tab 3 '
        },
    ]
    return(
        <>
        {/* <Row gutter={[10,20]} >
        <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={24}>
        <div className="box">
            Cột 1
         </div>
         </Col>
        <Col xxl={4} xl={4} lg={3} md={6} sm={12} xs={24}>
        <div className="box">
            Cột 2
         </div>
         </Col>
        <Col xxl={6} xl={6} lg={3} md={6} sm={12} xs={24}>
        <div className="box">
            Cột 3
         </div>
         </Col>
        <Col xxl={8} xl={8} lg={3} md={6} sm={12} xs={24}>
        <div className="box">
            Cột 4
         </div>
         </Col>
        </Row>
         */}

         <Row gutter={[20,20]}>
            <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24} >
            <CardItem title="box 1" />
            </Col>
            <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} >
            <CardItem title="box 2" />
            </Col>
            <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} >
            <CardItem title="box 3" />
            </Col>
            <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} >
            <CardItem title="box 4" />
            </Col>
</Row>
            <Row gutter={[20,20]} className="mt-20">
                <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24} >
                    <CardItem title="box 5" style={{height:"400px"}}/>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} >
                <CardItem title="box 6" style={{height:"400px"}}/>
            </Col>
            </Row>
            
            
            <Row gutter={[20,20]} className="mt-20">
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} >
                <CardItem title="box 7" style={{height:"400px"}}/>
            </Col>
            <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24} >
                <CardItem title="box 8" style={{height:"400px"}}/>
            </Col>

        </Row>
            <Row gutter={[20,20]} className="mt-20">
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} >
                <CardItem title="box 9" style={{height:"400px"}}/>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} >
                <CardItem title="box 10" style={{height:"400px"}}/>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} >
                <CardItem title="box 11" style={{height:"400px"}}/>
            </Col>
            </Row>

            <Carousel autoplay dotPosition="top" dots={true} effect="fade">
                <div className="slider-item">
                    1
                </div>
                <div className="slider-item">
                    2
                </div>
                <div className="slider-item">
                    3
                </div>
                <div className="slider-item">
                    4
                </div>
            </Carousel>
            <Collapse defaultActiveKey="1" accordion={true} >
            {list.map(item =>(
                <Panel header={item.title} key={item.id}>
                <p>{item.discription}</p>
            </Panel>
            ))}
            </Collapse>
            <Image width ={200 } src="https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g" preview={true}/>
            <Tabs  items = {items}/>
            <QRCode
            errorLevel="H"
            value="https://www.facebook.com/profile.php?id=100018215419459"
            icon="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/462228127_1546388892644943_5453101754837412291_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE-yDK1-eLGGVRjZCLR3l18h_7ooh7NKn2H_uiiHs0qfVzVblvVfAnbKNg_CzrGffSX-RcUaFfrn0McIiItkF-F&_nc_ohc=DcUxEyhI_AcQ7kNvgGwP9i2&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=A9aLneDqE83Vz0ryg7mcvKE&oh=00_AYBBDHmdO_0mH6GzYmYhRO360ZDZX8SSSKtTvLuWnrUH8w&oe=672D03D0"
  />
  <Rate allowHalf tooltips={['kém' ,'trung bình' , ' bình thường' , 'khá' , 'giỏi']} onChange={(e)=>console.log(e)}/>
        </>
    )
}
export default LearnGrid;