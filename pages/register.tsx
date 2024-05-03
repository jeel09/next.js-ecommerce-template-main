import { useRouter } from "next/navigation";
import Layout from "../layouts/Main";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://localhost:7206/api/UserAPI/SignUp', {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      });
      console.log("signup success", response.data);
      router.push("/login");
    }
    catch (error: any) {
      console.log(error);
    }
  };

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
            <h2 className="form-block__title">
              Create an account and discover the benefits
            </h2>
            <p className="form-block__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <form className="form">
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="First Name"
                  type="text"
                  value={user.firstName}
                  onChange={e => setUser({ ...user, firstName: e.target.value })}
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="Last Name"
                  type="text"
                  value={user.lastName}
                  onChange={e => setUser({ ...user, lastName: e.target.value })}
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="Email"
                  type="text"
                  value={user.email}
                  onChange={e => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="Password"
                  placeholder="Password"
                  value={user.password}
                  onChange={e => setUser({ ...user, password: e.target.value })}
                />
              </div>

              <button
                type="button"
                className="btn btn--rounded btn--yellow btn-submit"
                onClick={handleSignUp}
              >
                Sign up
              </button>

              <p className="form__signup-link">
                <Link href="/login">Are you already a member?</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}