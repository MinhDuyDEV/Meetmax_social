import React from "react";

const Avatar = ({ src = "/avatar.png", className = "" }) => {
  return (
    <img
      src={src}
      alt="avatar"
      className={`w-[42px] h-[42px] rounded-[10px] object-cover ${className}`}
    />
  );
};

export default Avatar;
