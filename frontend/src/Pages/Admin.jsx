import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlusCircle,
  Edit,
  Trash2,
  XCircle,
  Users,
  Briefcase,
  ShoppingBag,
} from "lucide-react"; // Using lucide-react for icons

// Mock data for services and products
const initialServices = [
  { id: 1, label: "Website Designing", href: "/services/website-designing" },
  {
    id: 2,
    label: "Website Development",
    href: "/services/website-development",
  },
  {
    id: 3,
    label: "Software Development",
    href: "/services/software-development",
  },
  {
    id: 4,
    label: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  { id: 5, label: "Digital Marketing", href: "/services/digital-marketing" },
  { id: 6, label: "Social Media Management", href: "/services/social-media" },
  { id: 7, label: "Search Engine Optimization", href: "/services/seo" },
  {
    id: 8,
    label: "Logo & Graphic Designing",
    href: "/services/graphic-design",
  },
  { id: 9, label: "CRM Development", href: "/services/crm-development" },
  { id: 10, label: "Whatsapp Marketing", href: "/services/whatsapp-marketing" },
];

const initialProducts = [
  { id: 11, label: "Mobile App", href: "/products/mobile-app" },
  { id: 12, label: "Website & Portal", href: "/products/website-portal" },
  { id: 13, label: "Web Application", href: "/products/web-application" },
  { id: 14, label: "Digital Products", href: "/products/digital-products" },
];

// Modal component for adding/editing services/products
const ItemModal = ({
  isOpen,
  onClose,
  onSubmit,
  itemType,
  mode,
  currentItem,
}) => {
  const [label, setLabel] = useState("");
  const [href, setHref] = useState("");

  useEffect(() => {
    if (mode === "edit" && currentItem) {
      setLabel(currentItem.label);
      setHref(currentItem.href);
    } else {
      setLabel("");
      setHref("");
    }
  }, [isOpen, mode, currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: currentItem?.id, label, href });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <XCircle size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {mode === "add"
            ? `Add New ${itemType.slice(0, -1)}`
            : `Edit ${itemType.slice(0, -1)}`}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="label"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Label
            </label>
            <input
              type="text"
              id="label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              placeholder={`e.g., ${
                itemType === "services" ? "Website Designing" : "Mobile App"
              }`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="href"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              URL (href)
            </label>
            <input
              type="text"
              id="href"
              value={href}
              onChange={(e) => setHref(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              placeholder={`e.g., /${itemType}/${
                itemType === "services" ? "website-designing" : "mobile-app"
              }`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-md transform hover:scale-105"
          >
            {mode === "add" ? `Add ${itemType.slice(0, -1)}` : `Save Changes`}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

const Admin = () => {
  const [activeTab, setActiveTab] = useState("users"); // 'users', 'services', 'products'
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState(initialServices);
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // 'add' or 'edit'
  const [modalItemType, setModalItemType] = useState(""); // 'services' or 'products'
  const [currentEditingItem, setCurrentEditingItem] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      setLoading(true);
      // Mock user data
      const mockUsers = [
        {
          id: "usr1",
          name: "John Doe",
          email: "john.doe@example.com",
          role: "user",
          status: "active",
          registered: "2023-01-15",
        },
        {
          id: "usr2",
          name: "Jane Smith",
          email: "jane.smith@example.com",
          role: "admin",
          status: "active",
          registered: "2022-11-20",
        },
        {
          id: "usr3",
          name: "Peter Jones",
          email: "peter.j@example.com",
          role: "user",
          status: "inactive",
          registered: "2023-02-28",
        },
        {
          id: "usr4",
          name: "Anna Williams",
          email: "anna.w@example.com",
          role: "user",
          status: "active",
          registered: "2023-03-10",
        },
        {
          id: "usr5",
          name: "Mike Brown",
          email: "mike.b@example.com",
          role: "user",
          status: "banned",
          registered: "2023-04-05",
        },
      ];

      await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network delay
      setUsers(mockUsers);
      setLoading(false);
    };

    fetchData();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const statusColors = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-yellow-100 text-yellow-800",
    banned: "bg-red-100 text-red-800",
  };

  // --- User Management Actions ---
  const handleUserAction = (id, action) => {
    alert(`User ID: ${id} - Action: ${action}`);
    // In a real app, you'd make API calls here to update user status/role/delete
    if (action === "delete") {
      setUsers(users.filter((user) => user.id !== id));
    }
    // For edit, you might open a specific user edit modal
  };

  // --- Service/Product Management Actions ---
  const handleAddItem = (type) => {
    setModalItemType(type);
    setModalMode("add");
    setCurrentEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEditItem = (type, item) => {
    setModalItemType(type);
    setModalMode("edit");
    setCurrentEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDeleteItem = (type, id) => {
    if (confirm(`Are you sure you want to delete this ${type.slice(0, -1)}?`)) {
      if (type === "services") {
        setServices(services.filter((service) => service.id !== id));
      } else if (type === "products") {
        setProducts(products.filter((product) => product.id !== id));
      }
      alert(`${type.slice(0, -1)} deleted successfully!`);
    }
  };

  const handleModalSubmit = (item) => {
    if (modalMode === "add") {
      const newItem = { ...item, id: Date.now().toString() }; // Simple ID generation
      if (modalItemType === "services") {
        setServices([...services, newItem]);
      } else if (modalItemType === "products") {
        setProducts([...products, newItem]);
      }
      alert(`${modalItemType.slice(0, -1)} added successfully!`);
    } else if (modalMode === "edit") {
      if (modalItemType === "services") {
        setServices(services.map((s) => (s.id === item.id ? item : s)));
      } else if (modalItemType === "products") {
        setProducts(products.map((p) => (p.id === item.id ? item : p)));
      }
      alert(`${modalItemType.slice(0, -1)} updated successfully!`);
    }
    setIsModalOpen(false);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      );
    }

    switch (activeTab) {
      case "users":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="overflow-x-auto"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Registered
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <motion.tr
                    key={user.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, backgroundColor: "#f9fafb" }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          statusColors[user.status]
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.registered}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => handleUserAction(user.id, "edit")}
                        className="text-purple-600 hover:text-purple-900 transition-colors flex items-center gap-1"
                      >
                        <Edit size={16} /> Edit
                      </button>
                      <button
                        onClick={() => handleUserAction(user.id, "delete")}
                        className="text-red-600 hover:text-red-900 transition-colors flex items-center gap-1"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        );
      case "services":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="overflow-x-auto"
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => handleAddItem("services")}
                className="bg-purple-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors shadow-md"
              >
                <PlusCircle size={20} /> Add Service
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Label
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    URL (href)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {services.map((service) => (
                  <motion.tr
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, backgroundColor: "#f9fafb" }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {service.label}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {service.href}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => handleEditItem("services", service)}
                        className="text-purple-600 hover:text-purple-900 transition-colors flex items-center gap-1"
                      >
                        <Edit size={16} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteItem("services", service.id)}
                        className="text-red-600 hover:text-red-900 transition-colors flex items-center gap-1"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        );
      case "products":
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="overflow-x-auto"
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => handleAddItem("products")}
                className="bg-purple-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors shadow-md"
              >
                <PlusCircle size={20} /> Add Product
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Label
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    URL (href)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <motion.tr
                    key={product.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, backgroundColor: "#f9fafb" }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.label}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.href}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => handleEditItem("products", product)}
                        className="text-purple-600 hover:text-purple-900 transition-colors flex items-center gap-1"
                      >
                        <Edit size={16} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteItem("products", product.id)}
                        className="text-red-600 hover:text-red-900 transition-colors flex items-center gap-1"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-8 md:p-12 font-sans text-gray-800">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 tracking-tight drop-shadow-md">
          Admin Dashboard
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Empowering your control over users, services, and products.
        </p>
      </motion.header>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 border border-purple-100"
      >
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <TabButton
            icon={<Users size={20} />}
            label="Users"
            isActive={activeTab === "users"}
            onClick={() => setActiveTab("users")}
          />
          <TabButton
            icon={<Briefcase size={20} />}
            label="Services"
            isActive={activeTab === "services"}
            onClick={() => setActiveTab("services")}
          />
          <TabButton
            icon={<ShoppingBag size={20} />}
            label="Products"
            isActive={activeTab === "products"}
            onClick={() => setActiveTab("products")}
          />
        </div>

        {/* Content Area */}
        {renderContent()}
      </motion.div>

      <AnimatePresence>
        <ItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
          itemType={modalItemType}
          mode={modalMode}
          currentItem={currentEditingItem}
        />
      </AnimatePresence>
    </div>
  );
};

// Reusable Tab Button Component
const TabButton = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 py-3 px-6 text-lg font-medium transition-all duration-300 ease-in-out
      ${
        isActive
          ? "text-purple-700 border-b-4 border-purple-600 bg-purple-50"
          : "text-gray-600 hover:text-purple-700 hover:bg-gray-50 border-b-4 border-transparent"
      }
      rounded-t-lg
    `}
  >
    {icon}
    {label}
  </button>
);

export default Admin;
