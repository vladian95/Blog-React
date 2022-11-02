import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

export default function Settings() {
  return (
    <div className="Settings">
      <div className="SettingsWrapper">
        <div className="SettingsTitle">
          <span className="SettingsUpdateTitle">Update your Account</span>
          <span className="SettingsDeleteTitle">Delete Account</span>
        </div>
        <form className="SettingsForm">
          <label>Profile Picture</label>
          <div className="SettingsPP">
            <img
              src="https://zastavok.net/main/priroda/1425027242.jpg"
              alt=""
            />
            <label htmlFor="FileInput">
              <i className="SettingsPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="FileInput" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Vladian95" />
          <label>Email</label>
          <input type="email" placeholder="kvankvan1995@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="SettingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
