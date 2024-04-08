
const Select = (props: { title: string }) => {
    return <div>
        <label className="block text-gray-900 text-left">{props.title}</label>

        <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full text-gray-700"
        >
            <option value="">Hà Nội</option>
            <option value="JM">Hải Phòng</option>
            <option value="SRV">Vũng Tàu</option>
            <option value="JH">Sài Gòn</option>
            <option value="BBK">Đà Lạt</option>
            <option value="AK">Bắc Yên</option>
            <option value="BG">Hà Giang</option>
            <option value="EC">Lạng Sơn</option>
        </select>
    </div>
}

export default Select;