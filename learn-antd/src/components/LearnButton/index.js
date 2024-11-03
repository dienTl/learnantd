import { Button } from 'antd';
import { useState } from 'react';
import {FullscreenOutlined } from "@ant-design/icons"

function LearnButton(){
     const [loading,setloading] = useState(false)

   const handleClick = () => {
    setloading(true)
    setTimeout(()=>{
      const result = {
        code: 200 ,
        data : []
      };
      if(result && result.code === 200){
        setloading(false)
      }
    },3000)
   }
   const handle = () =>{
      <Button icon={<FullscreenOutlined  rotate={40} type='ghost' /> }>Button </Button>
   }
    return(
        <>
<Button type="ghost" loading={loading} onClick={handleClick}  size='large' > Nội dung</Button>
    <Button onclick={handle} icon={<FullscreenOutlined  rotate={40} spin={true} /> }>Button </Button>
        </>
    )
}
export default LearnButton;