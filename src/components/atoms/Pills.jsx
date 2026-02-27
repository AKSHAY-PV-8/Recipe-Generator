
const Pills = (
    {
        title,
        style = {}
    }
) => {
    return (
        <span className={`m-1 border rounded-2xl text-center text-[12px] shadow-2xl px-1 text-ellipsis ${style}`}>
            {title}
        </span>
    )
}

export default Pills
