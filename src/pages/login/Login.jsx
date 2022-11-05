import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <div className="Login">
      <span className="LoginTitle">Login</span>
      <form className="LoginForm">
        <label>Email</label>
        <input type="text" placeholder="Enter your Email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your Password..." />
        <button className="LoginButton">Login</button>
      </form>
      <button className="LoginRegisterButton">
        <Link className="Link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
