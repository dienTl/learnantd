import { Badge, Card, Col, Row } from "antd";

 function RoomGrid(props){
    const {rooms} = props;
    return(
        <>
         <Row gutter={[20,20]}>
            {rooms.map(item =>(
                <Col span= {12} key={item.id}>
                    <Badge.Ribbon text={item.typeroom ? "Vip" :" thường"}
                        color={item.typeroom ? "red" : "purple"}>
                    <Card title ={item.name}>
                <p>Số giường: <strong>{item.quatitybed}</strong></p>
                <p>Số người: <strong>{item.quatitypeople}</strong></p>
                 <p>{item.status ? (
                    <Badge status="success" text="Còn phòng"/>
                 ):(
                    <Badge status="error" text="hết phòng" />
                 )}</p>
             </Card>
                    </Badge.Ribbon>
                   
                </Col>
               
            ))}
        </Row>
        </>
    )
 }
 export default RoomGrid;