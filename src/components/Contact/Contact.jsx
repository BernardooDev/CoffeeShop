import {
  ContactInformationLeft,
  ContactPage,
  ContactUsP,
  ContactUsTitle,
  ContainerAboutContact,
  ContainerLeft,
  ContainerRight,
  DataAboutInformationLeft,
  FormContainer,
  FormContainerRight,
  InsideContainerLeft,
  InsideContainerRight,
  SelectContainerRight,
  SendMessageRight,
  SingleDataAboutInformation,
  SingleInput,
  SingleInputRadio,
  SocialMediasInformationLeft,
} from "./Style";

import { BsInstagram, BsTwitter, BsDiscord } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { TbLocation } from "react-icons/tb";

function Contact() {
  const HandleButton = (e) => {
    e.preventDefault();
  };
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
            <DataAboutInformationLeft>
              <SingleDataAboutInformation>
                <ImPhone />
                <h3>11953901461</h3>
              </SingleDataAboutInformation>
              <SingleDataAboutInformation>
                <TfiEmail />
                <h3>suport@coffee.com</h3>
              </SingleDataAboutInformation>
              <SingleDataAboutInformation>
                <TbLocation />
                <h3>New York, Central Park</h3>
              </SingleDataAboutInformation>
            </DataAboutInformationLeft>
            <SocialMediasInformationLeft>
              <BsInstagram />
              <BsTwitter />
              <BsDiscord />
            </SocialMediasInformationLeft>
          </InsideContainerLeft>
        </ContainerLeft>
        <ContainerRight>
          <InsideContainerRight>
            <FormContainerRight>
              <FormContainer>
                <SingleInput>
                  <label htmlFor="name">First Name</label>
                  <input type="text" id="name" />
                </SingleInput>
                <SingleInput>
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" />
                </SingleInput>
                <SingleInput>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </SingleInput>
                <SingleInput>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" />
                </SingleInput>
              </FormContainer>
            </FormContainerRight>
            <SelectContainerRight>
              <SingleInputRadio>
                <label htmlForfor="sugestion">Sugestion</label>
                <input type="radio" name="purpose" id="sugestion" />
              </SingleInputRadio>
              <SingleInputRadio>
                <label htmlFor="complain">Complain</label>
                <input type="radio" name="purpose" />
              </SingleInputRadio>
              <SingleInputRadio>
                <label htmlFor="doubt">Doubt</label>
                <input type="radio" name="purpose" />
              </SingleInputRadio>
            </SelectContainerRight>
            <SendMessageRight>
              <textarea
                name="textarea"
                rows="10"
                cols="50"
                placeholder="Write something here..."
              ></textarea>
              <button type="submit" onClick={HandleButton}>
                Send
              </button>
            </SendMessageRight>
          </InsideContainerRight>
        </ContainerRight>
      </ContainerAboutContact>
    </ContactPage>
  );
}

export default Contact;
