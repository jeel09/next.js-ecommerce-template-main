import { useState } from "react";
import Layout from "../layouts/Main";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      const response = await axios.post("https://localhost:7206/api/UserAPI/SignIn", {
        email: user.email,
        password: user.password,
      }, {
        withCredentials: true,
    });
      console.log("signin success", response.data);
      router.push("/products");
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <i className="icon-left"></i>Back to store
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>
            <p className="form-block__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div className="form">
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="email"
                  type="text"
                  value={user.email}
                  onChange={e => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={e => setUser({ ...user, password: e.target.value })}
                />
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social fb-btn">
                  <i className="icon-facebook"></i>Facebook
                </button>
                <button type="button" className="btn-social google-btn">
                  <img src="/images/icons/gmail.svg" alt="gmail" /> Gmail
                </button>
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
                onClick={handleSignIn}
              >
                Sign in
              </button>

              <p className="form__signup-link">
                Not a member yet? <a href="/register">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}