import './topbar.css';

export default function TopBar() {
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
          <li className="TopListItem">HOME</li>
          <li className="TopListItem">ABOUT</li>
          <li className="TopListItem">CONTACT</li>
          <li className="TopListItem">WRITE</li>
          <li className="TopListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="TopRight">
        <img
          className="TopImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <i className="TopSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
