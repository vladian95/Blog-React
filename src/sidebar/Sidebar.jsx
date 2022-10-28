import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="SidebarItem">
        <span className="SidebarTitle">About Me</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, beatae,
          quae, provident ipsum eum dolorem quibusdam
        </p>
      </div>
    </div>
  );
}
