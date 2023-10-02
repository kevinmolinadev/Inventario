import { useState, useEffect } from "react";
import { getAllRecords } from "../api";
const SalesHistory = () => {
    const [records, setRecords] = useState(null);
    useEffect(() => {
        (async () => {
            setRecords(await getAllRecords());
        })();
    }, [])
    return records && (
        <div className="flex flex-col gap-4">
            <p className="text-lg pt-2 lg:text-2xl text-center lg:pt-4">Registro de ventas</p>
            <table>
                <thead className="text-sm md:text-base">
                    <tr>
                        <th>Vendedor</th>
                        <th className="hidden md:inline">Fecha de venta</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                    {
                        records.map((item,index) => {
                            return (
                                <tr key={index} className="text-center" >
                                    <td>{item.nombre_usuario}</td>
                                    <td className="hidden md:inline">{item.fecha_venta.split('T')[0]}</td>
                                    <td>{item.nombre_producto}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{item.precio_unitario}$</td>
                                    <td>{item.total}$</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default SalesHistory;