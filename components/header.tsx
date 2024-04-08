import { useRouter } from "next/router";
import React from "react";
import Button from "./button";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();

  const handleLogin = () => {
    router.push("/login");
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-2 bg-dark text-white">
      <div>
        <span role="button" onClick={()=>{router.push("/")}}>Document Website</span>
      </div>
      <div>
        {isLoggedIn ? (
          <Button
            className="bg-dark border-0 text-white"
            onClick={handleLogout}
            label="Logout"
          />
        ) : (
          <Button
            className="bg-dark border-0 text-white"
            onClick={handleLogin}
            label="Login"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
