import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const res = await api.post("/auth/login", formData);

            localStorage.setItem("token", res.data.token);

          toast.success("Login Successful 🎉");

            setTimeout(() => {
            navigate("/dashboard");
            }, 1000);

             } catch (error) {

            toast.error(error.response?.data?.message || "Login Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
                    Welcome Back 👋
                </h1>

                <p className="text-center text-slate-500 mb-8">
                    Login to SkillBridge AI
                </p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 mb-4 outline-none focus:border-blue-600"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 mb-6 outline-none focus:border-blue-600"
                        required
                    />

                   <button
  type="submit"
  disabled={loading}
  className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
    loading
      ? "bg-blue-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  {loading ? "Logging in..." : "Login"}
</button>

                </form>

            </div>

        </div>

    );

};

export default Login;