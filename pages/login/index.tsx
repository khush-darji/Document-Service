import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./LoginPage.module.css";
import { useAuth } from "@/context/AuthContext";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isLoggedIn, login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Authenticate user using API route
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      login(data);
    } else {
      if (res.status === 401 || res.status === 404) {
        const respose = await res.json();
        setError(respose.message)
      } else {
        console.error("Login failed");
      }
    }
  };

  useEffect(()=>{
    if(isLoggedIn){
      router.push("/")
    }
  },[])

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <h1>Login</h1>
        {error && <p className={styles["error"]}>{error}</p>}
        <div className={styles["form-group"]}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded text-decoration-none"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
