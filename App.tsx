
import React, { useState } from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  PlusCircle,
  Leaf,
  Menu,
  X,
  Car,
  LogOut,
} from "lucide-react";

import Dashboard from "./pages/Dashboard";
import FindRide from "./pages/FindRide";
import OfferRide from "./pages/OfferRide";
import Impact from "./pages/Impact";
import Auth from "./pages/Auth";
import { User } from "./types";

/* -------------------- NAVBAR -------------------- */

const Navbar = ({ user }: { user: User }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Find Ride", path: "/find", icon: Search },
    { name: "Offer Ride", path: "/offer", icon: PlusCircle },
    { name: "Impact", path: "/impact", icon: Leaf },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black text-emerald-600">
              EcoRide
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold ${
                  location.pathname === item.path
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-gray-500 hover:text-emerald-600"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}

            <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full">
              <img
                src={user.avatar}
                className="h-8 w-8 rounded-full"
                alt="profile"
              />
              <span className="font-bold text-sm">{user.name}</span>
              <button
                className="text-gray-400 hover:text-red-500"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-500"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg font-semibold text-gray-600 hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

/* -------------------- APP -------------------- */

export default function App() {
  // ✅ SAFE dummy user (no backend crash)
  const [user, setUser] = useState<User | null>({
    id: "1",
    name: "Demo User",
    avatar: "https://i.pravatar.cc/150",
  });

  if (!user) {
    return <Auth onAuthSuccess={() => setUser(user)} />;
  }

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar user={user} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/find" element={<FindRide />} />
            <Route path="/offer" element={<OfferRide />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </main>

        <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
          © 2024 EcoRide Platform. Sustainable rides for a better future 🌱
        </footer>
      </div>
    </HashRouter>
  );
}
