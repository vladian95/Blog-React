import './post.css';

export default function Post() {
  return (
    <div className="Post">
      <img
        className="PostImg"
        src="https://zastavok.net/main/priroda/1425027242.jpg"
        alt=""
      />
      <div className="PostInfo">
        <div className="PostCats">
          <span className="PostCat">Music</span>
          <span className="PostCat">Life</span>
        </div>
        <span className="PostTitle">Lorem ipsum dolor.</span>
        <hr />
        <span className="PostDate">1 hour ago</span>
      </div>
      <p className="PostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias
        placeat dolor, distinctio, doloremque non magni perferendis totam unde
        cupiditate reprehenderit? Totam alias repellat molestiae ut, quos nulla
        cum quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem alias placeat dolor, distinctio, doloremque non magni perferendis
        totam unde cupiditate reprehenderit? Totam alias repellat molestiae ut,
        quos nulla cum quaerat?
      </p>
    </div>
  );
}
