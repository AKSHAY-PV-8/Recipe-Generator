
const Button = ({
    title,
    selected,
    icons,
    onClick
}) => {
    
    return (
        <div className="">
            <button className={selected ? "bg-[#87adaa] shadow-xl/20 rounded-[5px] p-1 text-[18px] font-medium font-serif text-white  m-2 hover:-translate-px" : 
            "bg-[#f5f5f5] rounded-[5px] p-1 text-[18px] shadow-xl/20 font-medium font-serif text-[#147b74]  m-2 hover:bg-[#6ab59e] hover:text-white hover:-translate-px"}
            onClick={onClick}>
                {icons}
                {title}
            </button>
        </div>
    )
}

export default Button
