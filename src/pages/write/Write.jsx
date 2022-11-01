import './write.css';

export default function Write() {
  return (
    <div className="Write">
      <img
        src="https://zastavok.net/main/priroda/1425027242.jpg"
        alt=""
        className="WriteImg"
      />
      <form className="WriteForm">
        <div className="WriteFormGroup">
          <label htmlFor="FileInput">
            <i className="WriteIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="FileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Title"
            className="WriteInput"
            autoFocus={true}
          />
        </div>
        <div className="WriteFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="WriteInput WriteText"
          ></textarea>
        </div>
        <button className="WriteSubmit">Publish</button>
      </form>
    </div>
  );
}
