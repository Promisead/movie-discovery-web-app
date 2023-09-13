import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="icon-div">
        <div className="icon-smedia-container">
          <Image
            src="/images/icon-facebook.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
        <div className="icon-smedia-container">
          <Image
            src="/images/icon-instagram.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
        <div className="icon-smedia-container">
          <Image
            src="/images/icon-twitter.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
        <div className="icon-smedia-container">
          <Image
            src="/images/icon-youtube.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
      </div>
      <div className="div-bs">
        <b>Conditions of Use</b>
        <b>Privacy & Policy</b>
        <b>Press Room</b>
      </div>
      <small>
        <i>©2023 Promise Champion </i>
        <a
          href="https://github.com/"
          target="_blank"
          className=""
        >
          Source Code
        </a>
      </small>
    </footer>
  );
}
