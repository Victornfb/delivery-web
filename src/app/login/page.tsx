"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginFormInputs {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Usuário é obrigatório"),
  password: yup
    .string()
    .min(5, "Senha deve ter pelo menos 5 caracteres")
    .required("Senha é obrigatória"),
});

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setError("");

    try {
      const response = await api.post("/auth/login/employee", data);
      const accessToken = response.data.accessToken;

      login(accessToken);
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      setError(
        "Falha no login. Por favor, verifique suas credenciais e tente novamente."
      );
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.imgur.com/DRC0VBn.png')" }}
    >
      <div className="absolute inset-0 bg-red-900 opacity-50"></div>
      <div className="relative z-10 p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Entrar</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Usuário:
            </label>
            <input
              type="text"
              id="username"
              {...register("username")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-200"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}