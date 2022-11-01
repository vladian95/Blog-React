import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="SidebarItem">
        <span className="SidebarTitle">About Me</span>
        <img
          src="https://st2.depositphotos.com/3272717/8196/i/450/depositphotos_81965018-stock-photo-blond-girl-in-a-field.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, beatae,
          quae, provident ipsum eum dolorem quibusdam
        </p>
      </div>
      <div className="SidebarItem">
        <span className="SidebarTitle">CATEGORIES</span>
        <ul className="SidebarLIst">
          <li className="SidebarListItem">Life</li>
          <li className="SidebarListItem">Music</li>
          <li className="SidebarListItem">Style</li>
          <li className="SidebarListItem">Sport</li>
          <li className="SidebarListItem">Tech</li>
          <li className="SidebarListItem">Cinema</li>
        </ul>
      </div>
    </div>
  );
}
