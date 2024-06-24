import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room ID is generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both the fields are requried");
      return;
    }

    // redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
    toast.success("room is created");
  };

  // when enter then also join
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <div className="logoSection">
          <img className="homePageLogo" src={logo} alt="code-sync-logo" />
          <h5>Code Bytes</h5>
        </div>
        <h6 className="desc">Real-time code collaboration platform</h6>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button className="btn" id="joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have a room ID then create &nbsp;
            <a onClick={generateRoomId} href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h6>Byte-sized brilliance, coding together in harmony!</h6>
        <h5>
          Built with 💚 by &nbsp;
          <a href="https://github.com/AyushKumarThakur21BCE3771">Ayush</a>
        </h5>
      </footer>
    </div>
  );
}

export default Home;
