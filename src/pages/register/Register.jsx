import './register.css';

export default function Register() {
  return (
    <div className="Register">
      <span className="RegisterTitle">Login</span>
      <form className="RegisterForm">
        <label>Username</label>
        <input type="text" placeholder="Enter your Username..." />
        <label>Email</label>
        <input type="text" placeholder="Enter your Email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your Password..." />
        <button className="RegisterButton">Register</button>
      </form>
      <button className="RegisterLoginButton">Login</button>
    </div>
  );
}
