
import Item from "./Item"
import Menu from "./Menudoc"

const Box = () => {
    return <div className="grid   lg:grid-cols-6 lg:gap-10">
        <div>
           
        </div>
        <Menu/>
        <div className="rounded-lg lg:col-span-3 ">
        <Item img="/img_boxitem1.png" name="Hải Phòng Travel (Đất Cảng)" deliverytime="19:00" timearrive="20:30" time="1h30m" adress1="• Hà Nội" adress2="• Hải Phòng" price="Từ 230.000đ" distcout="Giảm 10%" />
        <Item img="/img_boxitem1.png" name="Hải Phòng Travel (Đất Cảng)" deliverytime="07:01" timearrive="08:31" time="1h30m" adress1="• Hà Nội" adress2="• Hải Phòng" price="Từ 230.000đ" distcout="Giảm 10%" />
        <Item img="/img_boxitem2.png" name="Nguyễn Gia Limousine (Hải Phòng)" deliverytime="14:01" timearrive="15:31" time="1h30m" adress1="•VP Cầu Giấy" adress2="• Hải Phòng" price="Từ 230.000đ" distcout="Giảm 10%" />
        </div>
       
    </div>
}
export default Box

