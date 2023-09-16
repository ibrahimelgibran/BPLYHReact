import React from "react";
import "./YouTubeComp.css";

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://i9.ytimg.com/vi_webp/td6fa64mfRQ/sddefault.webp?v=64b22ed1&sqp=COzL9acG&rs=AOn4CLC8fDnXII8zb1paNDgd_ncH_u5OjQ"
          alt=""
        />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YouTubeComp.defaultProps = {
  time: "00.00",
  title: "Tutorial Sedang Proses Diperbarui!",
  desc: "2x ditonton, 1 menit yang lalu",
};

export default YouTubeComp;
