import React from "react";

interface PropTypes {
  user: any;
  size: number;
  small: number;
  showText?: boolean;
  showBorder?: boolean;
  textPosition?: "right" | "down";
}

const StoryIcon = ({
  user,
  size,
  small,
  showText,
  showBorder,
  textPosition = "down",
}: PropTypes) => {
  const username = `${user.firstName.toLowerCase()}_${user.lastName[0].toLowerCase()}`;
  let textPos = "";
  if (textPosition === "down") textPos = "inline-block";
  else if (textPosition === "right")
    textPos = "flex flex-row items-center justify-between";
  //console.log(textPosition);

  return (
    <div className={`${textPos} cursor-pointer mt-1 px-2`}>
      <img
        src={user.picture}
        className={`p-0.5 rounded-full w-${small} h-${small} md:w-${size} md:h-${size} ${
          showBorder ? "border-2 border-pink-500" : ""
        }`}
      />
      {showText ? (
        <p className="text-center text-xs opacity-90 p-0 cursor-pointer">
          {username}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

StoryIcon.defaultProps = {
  showText: false,
  showBorder: false,
};

export default StoryIcon;
