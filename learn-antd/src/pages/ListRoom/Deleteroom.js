import { Button, Popconfirm } from "antd";
import {DeleteOutlined } from "@ant-design/icons"
import { deleteRoom} from "..//../severces/roomsSeverces"
function DELETEroom (props){

    const {record ,onReload} = props;

    const handledelete = async () =>{
        const response = await deleteRoom(record.id);
        if(response){
            onReload();
            alert("bạn đã xóa thành công")
        }
        else{
            alert("bạn xóa không thành công")
        }
        console.log(record.id)
    }
    
    return(
        <>
        <Popconfirm title ="sure to delete" onConfirm={handledelete}>
        <Button danger size="small" 
        icon={<DeleteOutlined  />}>
            
        </Button>
        </Popconfirm>
        
        </>
    )
}
export default DELETEroom ;