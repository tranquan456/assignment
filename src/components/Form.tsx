import Button from "./Button";
import Select from "./Select";
import Date from "./Date";
const Form=()=>{
    return<div className="w-full text-center ">
        <div className="form-text text-white text-2xl">
            <h2>Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</h2>
        </div>
        <div className="form-seach">
            <ul>
                <li>
                    
                    <a href="" className="action"><i className="fa-solid fa-bus-simple"></i> Xe Khách</a>
                </li>

                <li>
                    
                    <a href=""> <i className="fa-solid fa-plane-up"></i> Máy Bay</a>
                </li>
                <li>
                    
                    <a href=""> <i className="fa-solid fa-train"></i> Tàu Hỏa</a>
                </li>
                <li>
                    
                    <a href=""> <i className="fa-solid fa-caravan"></i>Thuê Xe</a>
                </li>
            </ul>
            <form action="" className="bg-white p-4 flex gap-4 rounded-lg border-gray-900">

                <i className="fa-solid fa-circle" /><Select title="Nơi xuất phát" />
                <i className="fa-solid fa-location-dot" />  <Select title="Nơi đến" />
                <i className="fa-solid fa-calendar-days" />  <Date title="Ngày đi" />
                <i className="fa-solid fa-plus" style={{color:" #4688f4;"}}></i>  <Date title="Thêm ngày về" />
                <div className="bg-[#FFC700] w-32 mt-3 frounded-md bg-gray-100 px-6 py-2.5 text-sm font-medium text-balck">
                <Button title="Tìm kiếm"/>
                </div>
            </form>
        </div>
</div>
}
export default Form