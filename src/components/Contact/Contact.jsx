import {
  ContactInformationLeft,
  ContactPage,
  ContactUsP,
  ContactUsTitle,
  ContainerAboutContact,
  ContainerLeft,
  ContainerRight,
  DataAboutInformationLeft,
  FormContainerRight,
  InsideContainerLeft,
  InsideContainerRight,
  SelectContainerRight,
  SendMessageRight,
  SocialMediasInformationLeft,
} from "./Style";

import {BsInstagram,BsTwitter,BsDiscord} from "react-icons/bs"

function Contact() {
  return (
    <ContactPage>
      <ContactUsTitle>Contact Us</ContactUsTitle>
      <ContactUsP>
        Any question or remarks? Just write for us a message!
      </ContactUsP>
      <ContainerAboutContact>
        <ContainerLeft>
          <InsideContainerLeft>
            <ContactInformationLeft>
              <h1>Contact Information</h1>
              <p>Say something to start a live chat!</p>
            </ContactInformationLeft>
            <DataAboutInformationLeft></DataAboutInformationLeft>
            <SocialMediasInformationLeft>
                <BsInstagram/>
                <BsTwitter/>
                <BsDiscord/>
            </SocialMediasInformationLeft>
          </InsideContainerLeft>
        </ContainerLeft>
        <ContainerRight>
          <InsideContainerRight>
            <FormContainerRight></FormContainerRight>
            <SelectContainerRight></SelectContainerRight>
            <SendMessageRight></SendMessageRight>
          </InsideContainerRight>
        </ContainerRight>
      </ContainerAboutContact>
    </ContactPage>
  );
}

export default Contact;
