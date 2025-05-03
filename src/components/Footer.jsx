import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, ClipboardList, User } from "lucide-react";

export default function Footer() {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path ? "text-gray-500" : "text-gray-400";

  return (
    <footer className="bg-white border-t p-2 shadow-md flex justify-around items-center">
      <Link to="/" className={`flex flex-col items-center ${isActive("/")}`}>
        <Home size={24} />
      </Link>
      <Link to="/atividades" className={`flex flex-col items-center ${isActive("/atividades")}`}>
        <ClipboardList size={24} />
      </Link>
      <Link to="/agenda" className={`flex flex-col items-center ${isActive("/agenda")}`}>
        <Calendar size={24} />
      </Link>
      <Link to="/perfil" className={`flex flex-col items-center ${isActive("/perfil")}`}>
        <User size={24} />
      </Link>
    </footer>
  );
}
