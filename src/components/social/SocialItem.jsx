import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const SocialItem = () => {
  const socialStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };
  const styles = {
    className: "social-item",
  };

  const socialLinks = [
    {
      name: "facebook",
      className: `facebook ${styles.className}`,
      url: "https://www.facebook.com/techiesakar",
      iconTag: <BsFacebook />,
    },
    {
      name: "instagram",
      className: `instagram ${styles.className}`,
      url: "https://instagram.com/techiesakar",
      iconTag: <BsInstagram />,
    },
    {
      name: "twitter",
      className: `twitter ${styles.className}`,
      url: "https://twitter.com/techiesakar",
      iconTag: <BsTwitter />,
    },

    {
      name: "github",
      className: `github ${styles.className}`,
      url: "https://github.com/techiesakar",
      iconTag: <BsGithub />,
    },

    {
      name: "linkedin",
      className: `linkedin ${styles.className}`,
      url: "https://linkedin.com/techiesakar",
      iconTag: <BsLinkedin />,
    },
  ];
  return (
    <ul style={socialStyle} className="social">
      {socialLinks.map(({ name, className, url, iconTag }) => (
        <li key={name} className={`${className}`}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {iconTag}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialItem;
