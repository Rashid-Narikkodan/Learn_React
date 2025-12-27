import { useState } from "react";

function Header({ title }) {
  const [isPlaying, setPlay] = useState(false);

  const handleClick = () => {
    setPlay(true); // start video
  };

  return (
    <header className="w-full bg-gray-900 text-white py-5">
      <div className="flex justify-between items-center">
        <h2 className="ml-10 font-extrabold text-2xl">{title}</h2>
        <div className="mx-auto gap-4 flex">
          <a href="#">City</a>
          <a href="#">Me</a>
        </div>
        <div className="mr-3">
          {!isPlaying ? (
            <img
              src="/bat_logo.png"
              alt=""
              className="object-contain h-8 w-auto"
              onClick={handleClick}
            />
          ) : null}
        </div>
      </div>
      {isPlaying && (
        <video
          src="/logo_video.mp4"
          autoPlay={true}
          className={`fixed z-50 object-contain top-0 left-0 w-screen h-auto`}
          onEnded={() => {
            setPlay(false);
          }}
          onClick={() => {
            setPlay(false);
          }}
        />
      )}
    </header>
  );
}

export default Header;
