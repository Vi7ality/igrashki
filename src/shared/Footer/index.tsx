import styles from "./Footer.module.scss";
import fb from "../../assets/fb.png"
import inst from "../../assets/inst.png"
import logo from "../../assets/logo.png"
import ghost from "./assets/monsters/ghost.png"
import ghostLg from "./assets/monsters/ghostLg.png"
import ghostSm from "./assets/monsters/ghostSm.png"


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <img src={logo} />
        <h6>Copyright ©2021 Grow With Us. All rights reserved</h6>
      </div>
      <img src={ghost} className={styles.ghost} />
      <img src={ghostLg} className={styles.ghostLg} />
      <img src={ghostSm} className={styles.ghostSm} />
      <div className={styles.footerRight}>
        <div className={styles.socials}>
          <a href="https://instagram.com/growwith__you?igshid=MjEwN2IyYWYwYw==">
            <img src={inst} />
          </a>
          <a href="https://www.facebook.com/growithyou.official">
            <img src={fb} />
          </a>
        </div>
        {/* <div className={styles.contacts}>
          <h6>+380 12 345 67 89</h6>
          <h6>ouremail@email.com</h6>
        </div> */}
        <div className={styles.termsAndPrivacy}>
          <a>Terms&Conditions</a>
          <a>Legal&privacy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
