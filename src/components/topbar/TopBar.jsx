import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
  const user = false;
  return (
    <div className="Top">
      <div className="TopLeft">
        <i className="TopIcon fa-brands fa-square-facebook"></i>
        <i className="TopIcon fa-brands fa-square-twitter"></i>
        <i className="TopIcon fa-brands fa-square-pinterest"></i>
        <i className="TopIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="TopCenter">
        <ul className="TopList">
          <li className="TopListItem">
            <Link className="Link" to="/">
              HOME
            </Link>
          </li>
          <li className="TopListItem">
            <Link className="Link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="TopListItem">
            <Link className="Link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="TopListItem">
            <Link className="Link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="TopListItem">{user && 'LOGOUT'}</li>
        </ul>
      </div>
      <div className="TopRight">
        {user ? (
          <img
            className="TopImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <ul className="TopList">
            <li className="TopListItem">
              <Link className="Link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="TopListItem">
              <Link className="Link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="TopSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
