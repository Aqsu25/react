import React, { useContext, useState } from "react";
import Layout from "../common/Layout";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../common/Http";
import { toast } from "react-toastify";
import { AdminAuthContext } from "../context/AdminAuth";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useContext(AdminAuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onHandleSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("API Result:", result);

      if (result.status === 200) {
        const adminInfo = {
          token: result.token,
          name: result.user.name,
          role: result.role,
          remember: data.remember || false,
        };

        if (data.remember) {
          localStorage.setItem("adminInfo", JSON.stringify(adminInfo));
        } else {
          sessionStorage.setItem("adminInfo", JSON.stringify(adminInfo));
        }

        login(adminInfo);

        toast.success("Login Successful!");

        if (result.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      } else {
        toast.error(result.message || "Login Failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
        <form
          onSubmit={handleSubmit(onHandleSubmit)}
          className="w-full max-w-md bg-white p-4 rounded-2xl shadow-xl"
        >
          <div className="text-center text-[#007595] text-3xl font-bold mb-6">
            Login
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm mb-2 text-slate-600">Email</label>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md px-3 py-2 focus:outline-none focus:border-[#007595]"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-600">
                Password
              </label>

              <input
                type="password"
                placeholder="Your Password"
                className="w-full rounded-md px-3 py-2 focus:outline-none focus:border-[#007595]"
                {...register("password", {
                  required: "Password is required",
                })}
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("remember")}
                className="w-4 h-4"
                id="remember"
              />
              <label htmlFor="remember" className="text-sm text-slate-600">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#007595] text-white py-2 rounded-md hover:bg-black transition duration-300 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Sign In"}
            </button>

            <p className="text-sm text-center text-slate-600">
              Don&apos;t have an account?{" "}
              <Link
                to="#signup"
                className="text-[#007595] underline font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
