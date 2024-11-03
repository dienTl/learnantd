import { Carousel } from "antd";

function Slide(){
    return(
        <>
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
        </>
    )
}
export default Slide ;