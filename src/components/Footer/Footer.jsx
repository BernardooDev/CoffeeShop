import { DescriptionFooter, Footer, SocialMedias, TittleFooter } from "./Style";
import {BsLinkedin , BsGithub, BsInstagram} from "react-icons/bs"

function footer() {

  return (
    <Footer>
      <TittleFooter>Cappucino</TittleFooter>
      <DescriptionFooter><p>© 2023 Cappucino. All rights reserved. Privacy Policy | Terms of Service | Designed by <a href="https://www.linkedin.com/in/bernardo-augusto-dev/" target="_blank">@BernardooDev</a></p></DescriptionFooter>
      <SocialMedias><BsLinkedin /><BsGithub /><BsInstagram /></SocialMedias>
    </Footer>
  );
}

export default footer;
