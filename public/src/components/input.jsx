const Input = ({title, type,placeholder, event, value, className}) => {
    const changeValue = (e) => {
        const value = e.target.value;
        event(value);
    }
    return (
        <div className="flex flex-col mb-4">
            <label className={`${className} md:text-black mb-2 md:font-semibold lg:text-lg`}>{title}</label>
            <input className="p-2 bg-white border-none shadow-sm text-black outline-indigo-500/95 rounded-md md:p-4 lg:text-lg" value={value} onChange={changeValue} type={!type?"text":type} placeholder={placeholder} required />
        </div>
    )
}
export default Input;