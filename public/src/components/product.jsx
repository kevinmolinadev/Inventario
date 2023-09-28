const Product=({product})=>{
    const {nombre,existencia,precio,img}=product;
    return(
        <article className={`w-full h-full relative ${Number(existencia)?"opacity":"opacity-40"} rounded-lg bg-slate-200 overflow-hidden border-2`}>
            <div className="w-full h-3/5">
                <img className="w-full h-full object-cover object-center" src={img} alt={nombre} />
            </div>
            <div className="flex flex-col p-1">
                <p>{nombre}</p>
                <p>Precio: {precio}</p>
                <p className="">{Number(existencia)?"En Stock":"Sin Stock"}</p>
                
            </div>
            <div className="absolute flex justify-center items-center top-0 right-0 mt-1 mr-1 shadow rounded-full cursor-pointer hover:bg-slate-500 transition-transform duration-300 hover:scale-110 shadow-white bg-slate-700 w-7 h-7 before:absolute before:content-['X'] before:scale-x-125  before:text-white " />
        </article>
    )
}
export default Product;