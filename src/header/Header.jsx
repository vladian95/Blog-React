import './header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="HeaderTitles">
        <span className="HeaderTitleSm">React & Node</span>
        <span className="HeaderTitleLg">Blog</span>
      </div>
      <img
        className="HeaderImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
