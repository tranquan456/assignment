// Props: Là một đối tượng đặc biệt (không thể bị thay đổi)
// được truyền từ cha xuống con
// Là để tái sử dụng code giữa các component
import Select from "./Select";
import Date from "./Date";
import Button from "./Button";
const SeachBaseDetail = () => {
    return <div className="seachBase bg-white">
        <ul>
            <li>

                <a href="" className="action"><i className="fa-solid fa-bus-simple"></i> 200K</a>
            </li>

            <li>

                <a href=""> <i className="fa-solid fa-plane-up"></i> Máy bay</a>
            </li>
            <li>

                <a href=""> <i className="fa-solid fa-train"></i> 100K</a>
            </li>

        </ul>
        <hr />
        <form action="" className=" form p-4 m-6 flex gap-4 ">          
                
        <i className="fa-solid fa-circle text-[#2474E5] " /> <Select  title="Nơi xuất phát" />
                <i className="fa-solid fa-location-dot text-[#FF0000] " />  <Select title="Nơi đến" />
                <i className="fa-solid fa-calendar-days text-[#2474E5]" />  <Date title="Ngày đi" />
                <i className="fa-solid fa-plus text-[#2474E5]" ></i>  <Date title="Thêm ngày về" />
                <div className="bg-[#FFC700] rounded-md w-32 mt-3 frounded-md px-6 py-2.5 text-sm font-medium text-balck">
                <Button title="Tìm kiếm"/>
                </div>
        </form>
        
    </div>
}

export default SeachBaseDetail