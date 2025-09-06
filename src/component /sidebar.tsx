import { X, Plus, User, ArrowDownRight } from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { label: "Add Account", icon: <Plus size={16} /> },
    { label: "Gold Jewellery", icon: <ArrowDownRight size={24} />},
    { label: "Silver Jewellery", icon: <ArrowDownRight size={24} /> },
    { label: "Trending Collection", icon: <ArrowDownRight size={24} /> },
    { label: "Gifts", icon: <ArrowDownRight size={24} />},
    { label: "Shop by Occasion", icon: <ArrowDownRight size={24} /> },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0  bg-opacity-40"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="relative bg-[#CA8787] w-64 h-full shadow-lg z-50 p-4 flex flex-col text-white">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Menu items */}
        <nav className="mt-10 space-y-4">
          {menuItems.map((item, idx) => (
            <div key={idx} className="border-b border-white/40 pb-2">
              <button className="flex items-center gap-2 w-full text-left hover:text-gray-200">
                {item.icon}
                <span>{item.label}</span>
              </button>
            </div>
          ))}
        </nav>

        {/* Login/Signup */}
        <div className="flex items-center bg-white py-1 text-gray-500 font-normal cursor-pointer hover:bg-gray-100">
          <User size={16} className="mr-2" />
          Login / SignUp
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
