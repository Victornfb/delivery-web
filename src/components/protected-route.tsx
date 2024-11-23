"use client";

import { useRouter } from "next/navigation";
import { useEffect, ReactNode, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div>
      </div>
    )
  }

  return <>{children}</>;
};

export default ProtectedRoute;