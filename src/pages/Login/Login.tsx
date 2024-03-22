import React, { FormEvent, useEffect, useState } from "react";

import classes from "./Login.module.scss";
import PageNav from "../../components/PageNav/PageNav";
import Button from "../../components/Button/Button";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  children?: React.ReactNode;
};

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  };

  return (
    <main className={classes.login}>
      <PageNav />
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={classes.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
};
export default Login;
