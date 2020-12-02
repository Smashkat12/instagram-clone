import { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram logo"
          className="app__headerImage"
        />
      </div>
      <Post
        username="Thabo"
        caption="Dope"
        imageUrl="https://www.karaglensuperspar.co.za/content/uploads/2019/09/bouquet-flora-flower-arrangement-2115971-scaled.jpg"
      />
      <Post
        username="Katlego"
        caption="This is a fun project"
        imageUrl="https://d2n4wb9orp1vta.cloudfront.net/cms/brand/ADP/2020-ADP/christmas20corvette.jpg;maxWidth=720"
      />
      <Post
        username="Chuma"
        caption="I love this!!!"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS68Pb_IA3gpZjIjazlS72PkxKXqEUXIy76hQ&usqp=CAU"
      />

      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default App;
