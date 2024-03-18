import React, { useState } from "react";

import classes from "./Login.module.scss";
import PageNav from "../../components/PageNav/PageNav";

type LoginProps = {
  children?: React.ReactNode;
};

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <main className={classes.login}>
      <PageNav />
      <form className={classes.form}>
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
          <button>Login</button>
        </div>
      </form>
    </main>
  );
};
export default Login;
