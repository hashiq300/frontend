import { Link } from "react-router-dom";
import "./SigninPage.css";
import LeftArrow from "../icons/LeftArrow";

const SigninPage = () => {
  return (
    <div className="signin-page">
      <nav className="sign-in-nav">
        <div className="nav">
          <button className="arrow">
            <LeftArrow />
          </button>
          <Link to="/signup" className="">
            Register
          </Link>
        </div>
        <div className="content">
          <h1>Sign In</h1>
          <p>Sign in to account in Green Store</p>
        </div>
      </nav>
      <main className="sign-in-main">
        <form className="form">
          <div className="input-group">
            <input placeholder="Enter your email" type="text" />
            <div className="error"></div>
          </div>
          <div className="input-group">
            <input placeholder="Enter your password" type="password" />
            <div className="error"></div>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </main>
    </div>
  );
};

export default SigninPage;
