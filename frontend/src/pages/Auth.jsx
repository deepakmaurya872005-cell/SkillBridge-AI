import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot, FaArrowRight } from "react-icons/fa";
import api from "../services/api";
import toast from "react-hot-toast";

const Auth = ({ initialMode = "login" }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState(initialMode);
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (mode === "login") {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else {
      setRegisterData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      mode === "register" &&
      registerData.password !== registerData.confirmPassword
    ) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      if (mode === "login") {
        const res = await api.post("/auth/login", loginData);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        toast.success("Login Successful 🎉");
        navigate("/dashboard");
      } else {
        await api.post("/auth/register", {
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
        });

        toast.success("Registration Successful 🎉");

        setLoginData({
          email: registerData.email,
          password: "",
        });

        setMode("login");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          (mode === "login" ? "Login Failed" : "Registration Failed")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-100 via-white to-indigo-100 px-4 py-10 flex items-center justify-center">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div className="absolute left-[8%] top-[18%] h-24 w-24 rounded-3xl border-2 border-blue-400 rotate-12" />
        <div className="absolute right-[10%] top-[20%] h-16 w-16 rounded-full border-2 border-indigo-400" />
        <div className="absolute bottom-[15%] left-[12%] h-20 w-20 rounded-full border-2 border-violet-400" />
      </div>

      <div className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-2xl shadow-indigo-900/10 backdrop-blur-xl lg:grid-cols-2">

        {/* Left side: Brand section */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-10 text-white lg:flex">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/20" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-white/20" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-xl shadow-lg">
              <FaRobot />
            </div>

            <div>
              <p className="text-xl font-extrabold tracking-tight">
                SkillBridge <span className="text-blue-200">AI</span>
              </p>
              <p className="text-xs text-blue-100">
                Your career growth companion
              </p>
            </div>
          </div>

          <div className="relative z-10 py-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              <FaRobot />
              AI Powered Career Assistant
            </div>

            <h1 className="text-4xl font-extrabold leading-tight xl:text-5xl">
              Bridge the Gap
              <span className="mt-2 block text-blue-200">
                Between Skills & Jobs
              </span>
            </h1>

            <p className="mt-6 max-w-md leading-7 text-blue-100">
              Understand your skills, discover what you are missing,
              and build a learning roadmap for your target career.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <FaArrowRight />
              </div>
              <p className="text-sm text-blue-100">
                Your next career step starts here.
              </p>
            </div>
          </div>

          <p className="relative z-10 text-xs text-blue-200">
            SkillBridge AI · Learn. Improve. Grow.
          </p>
        </div>

        {/* Right side: Login/Register form */}
        <div className="p-7 sm:p-10 lg:p-12">

          {/* Mobile logo */}
          <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-xl text-white shadow-lg">
              <FaRobot />
            </div>

            <div>
              <h1 className="text-xl font-extrabold text-slate-900">
                SkillBridge <span className="text-indigo-600">AI</span>
              </h1>
              <p className="text-xs text-slate-500">
                Your career growth companion
              </p>
            </div>
          </div>

          <div className="mb-8 text-center lg:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              {mode === "login" ? "Welcome Back" : "Get Started"}
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              {mode === "login" ? "Login to your account" : "Create your account"}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {mode === "login"
                ? "Continue your journey toward your career goals."
                : "Create an account to begin your SkillBridge AI journey."}
            </p>
          </div>

          {/* Login/Register tabs */}
          <div className="mb-7 grid grid-cols-2 rounded-2xl bg-slate-100 p-1.5">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`rounded-xl py-3 text-sm font-bold transition ${
                mode === "login"
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setMode("register")}
              className={`rounded-xl py-3 text-sm font-bold transition ${
                mode === "register"
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {mode === "register" && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={registerData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={mode === "login" ? loginData.email : registerData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={
                  mode === "login"
                    ? loginData.password
                    : registerData.password
                }
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete={
                  mode === "login" ? "current-password" : "new-password"
                }
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {mode === "register" && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:from-indigo-600 hover:to-violet-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                ? "Login to Account"
                : "Create Account"}

              {!loading && <FaArrowRight className="transition group-hover:translate-x-1" />}
            </button>
          </form>

          <div className="mt-7 text-center text-sm text-slate-500">
            {mode === "login"
              ? "New to SkillBridge AI?"
              : "Already have an account?"}{" "}

            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="font-bold text-indigo-600 transition hover:text-violet-700"
            >
              {mode === "login" ? "Create account" : "Login"}
            </button>
          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            SkillBridge AI · Your career, your next step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;