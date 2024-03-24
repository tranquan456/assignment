import Button from "./Button"

const Item = (props: { img: string,name:string,deliverytime:string,timearrive:string,time:string,adress1:string,adress2:string,price:string,distcout:string }) => {
    return <div className="h-72 rounded-lg bg-white mb-6  border-2 border-black-100 flex">
            <div className="py-16 sm:px-6">
                <img src={props.img} alt="" />
            </div>
            <div className="py-16 sm:px-6  ">
                <div className="">
                    <h2 className="font-semibold text-xl text-gray-700">{props.name}</h2>
                </div>
                <div className="mt-7 flex">
                    <p className="text-xl font-semibold text-gray-800">{props.deliverytime}</p>
                    <p className=" tx-lg py-1 text-gray-700 font-medium ml-3 ">{props.adress1}</p>
                </div>
                <p className="mt-2 text-gray-600 font-medium">{props.time}</p>
                <div className="flex mt-2" >
                    <p className="text-xl font-semibold text-gray-600">{props.timearrive}</p>
                    <p className=" tx-lg py-1 text-gray-600 font-medium ml-3">{props.adress2}</p>
                </div>
            </div>

            <div className="py-16 sm:px-6 ">
                <div className="ml-56">
                    <div className="text-xl font-semibold text-[#2474E5]">
                    <h2  >{props.price}</h2>
                    </div>
                <div className="inline-flex gap-2 rounded  bg-green-100 p-1 text-green-600  ml-7">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                    <span className="text-xs font-medium "> {props.distcout} </span>
                </div>
                <div className="mt-6">
                    <p>Còn 11 chỗ trống</p>
                </div>
                <div className="bg-[#FFC700] w-32 mt-3 frounded-md  px-6 py-2.5 text-sm font-medium text-balck">
                <Button title="Chọn tuyến"/>
                </div>
                <div>
                </div>
                </div>
                <p className="ml-20 mt-2 font-medium">KHÔNG CẦN THANH TOÁN TRƯỚC</p>
            </div>
        </div>
       
    
}
export default Item