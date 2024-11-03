import {Badge, Table, Tag, Tooltip} from "antd"
import DELETEroom from "./Deleteroom";
import EditRoom from "./EditRoom";

function RoomTable(props){
    const {rooms ,onReload} = props;
    const  coloumns =[
        {
            title :'name',
            dataIndex : 'name' ,
            key :' name' ,
        },
        {
            title :'số giường',
            dataIndex : 'quatitybed' ,
            key :'quatitybed' ,
        },
        {
            title :'số người',
            dataIndex : 'quatitypeople' ,
            key :'quatitypeople' ,
        },
        {
            title :'Loại Phòng',
            dataIndex : 'typeroom' ,
            key :'typeroom' ,
            render :(_,record) =>{
                console.log(record.typeroom)
                return(
                    <>
                    {record.typeroom ?
                    <Tooltip title="phòng VIP 5 sao">
                    <>
                    <Tag color="red">VIP</Tag>
                    {/* <Badge  color="red" text="VIP"/> */}
                    </>
                    </Tooltip>
                    :(
                        <Tooltip title="Chuẩn phòng thường">
                    <>
                    <Tag color="purple">THƯỜNG</Tag>
                    {/* <Badge  color="purple" text="Thường"/> */}
                    </>
                    </Tooltip>
                    )}
                    </>
                )
            }
        },
        {
            title :'Trạng thái',
            dataIndex : 'status' ,
            key :'status' ,
            render :(_,record) =>{
                console.log(record.status)
                return(
                    <>
                    {record.status ?
                    <Tooltip title="phòng chưa có khách đặt">
                        <>
                    <Tag color="green">còn phòng</Tag>
                   {/* <Badge  color="green" text="còn phòng"/> */}
                   </>
                    </Tooltip>
                    
                    
                    :
                    <Tooltip title="phòng đã có khách đặt"> 
                    <>
                        <Tag color="red">hết phòng</Tag>
                        {/* <Badge  color="red" text="hết phòng"/> */}
                    </>
                    </Tooltip>
                    }
                    </>
                )
            }
        },
        {
            title :'Hành động',
            key :'actions' ,
            render :(_,record) =>{
                console.log(record.status)
                return(
                    <>
                    <DELETEroom record={record} onReload={onReload} />
                    </>
                )
            }
        },
        {
            title :'Edit',
            key :'actions' ,
            render :(_,record) =>{
                console.log(record.status)
                return(
                    <>
                    {/* <DELETEroom record={record} onReload={onReload} /> */}
                    < EditRoom record={record} onReload={onReload} />
                    </>
                )
            }
        },
       
    ];
    return(
        <>
            <Table dataSource={rooms} columns={coloumns} rowKey={"id"} />

           
        </>
    )
 }
 export default RoomTable;