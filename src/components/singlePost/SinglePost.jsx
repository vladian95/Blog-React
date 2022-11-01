import './singlePost.css';

export default function SinglePost() {
  return (
    <div className="SinglePost">
      <div className="SinglePostWrapper">
        <img
          className="SinglePostImg"
          src="https://zastavok.net/main/priroda/1425027242.jpg"
          alt=""
        />
        <h1 className="SinglePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="SinglePostEdit">
            <i className="SinglePostIcon fa-regular fa-pen-to-square"></i>
            <i className="SinglePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="SinglePostInfo">
          <span className="SinglePostAuthor">
            Author: <b>Vladian95</b>
          </span>
          <span className="SinglePostDate">1 hour ago</span>
        </div>
        <p className="SinglePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur
          itaque saepe perferendis reprehenderit laudantium, ducimus dolores
          fugit earum aperiam quidem quod. Maxime aspernatur dolores sunt optio
          corporis quis iure! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tenetur, quam. Ratione itaque quibusdam aperiam
          nostrum corrupti aliquid nulla sapiente vero, molestiae commodi
          dolorem qui enim mollitia impedit ipsa repellendus autem!
        </p>
      </div>
    </div>
  );
}
