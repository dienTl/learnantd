import { useEffect, useState } from "react";
import  {getlistRoom} from "../../severces/roomsSeverces";
import { Badge, Button, Card, Col, Row } from "antd";
import {UnorderedListOutlined,GroupOutlined} from "@ant-design/icons"
import RoomGrid from "./RoomGrid";
import RoomTable from "./Roomtable";

function ListRoom(){
    const [rooms, setrooms] = useState([])
    const [isGrid, setisGrid] = useState(true);

    const fetchapi = async() => {
        const response  =  await getlistRoom();
        setrooms(response.reverse());
    }

    useEffect(() =>{
        fetchapi();
    },[])

    const handlereload =  () =>{
        fetchapi();
    }
    return(
        <>
        <Button onClick={() => setisGrid(false)}>
        <UnorderedListOutlined />
        </Button>
        <Button onClick={() => setisGrid(true)}>
        <GroupOutlined  />
        </Button>
        {isGrid ? (
        <>
           < RoomGrid  rooms={rooms}/> 
        </>
        ) :(<>
        <RoomTable rooms={rooms} onReload ={handlereload} />
        </>)}
       
       
        </>
    )
}

export default ListRoom;