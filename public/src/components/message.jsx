const Message=({message,title,event})=>{
    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/30 ">
            <div className="bg-white w-4/5 lg:w-auto lg:p-4 py-6 rounded-lg flex flex-col gap-4 justify-center items-center">
                <p className="text-xl text-center font-semibold">{message}</p>
                <button className="px-4 bg-slate-500 text-white rounded-md py-2" onClick={event}>{title}</button>
            </div>
        </div>
    )
}
export default Message;