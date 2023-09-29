import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Products from "../components/products";
import SalesHistory from "../components/sales-history";
const Dashboard = ({ isLogin }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin) {
            navigate("/login");
        }
    }, []);
    return isLogin && (
        <div className="flex h-screen">
            <section className="w-1/5 h-full p-4 bg-slate-500">
                <div className="flex gap-4 items-center">
                    <img className="rounded-lg w-2/5" src="https://wallpapers.com/images/featured/psyduck-3k6qpj8g4r8s4s5l.jpg" alt="psyduck" />
                    <p className="text-lg font-semibold text-white">Example Name</p>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                    <Link className="w-full text-white text-center text font-medium  py-2 duration-300 delay-75 transition-all rounded-3xl hover:cursor-pointer hover:bg-slate-600 " to="products">Productos</Link>
                    <Link className="w-full text-white text-center text font-medium  py-2 duration-300 delay-75 transition-all rounded-3xl hover:cursor-pointer hover:bg-slate-600 " to="sales-history">Registro de ventas</Link>
                </div>
            </section>
            <section className="w-4/5 h-full p-4">
                <section className="h-full bg-slate-100/90 rounded-xl">
                    <Routes>
                        <Route path="/products/*" element={<Products />} />
                        <Route path="/sales-history/*" element={<SalesHistory />} />
                    </Routes>
                </section>
            </section>
        </div>
    );
};

export default Dashboard;