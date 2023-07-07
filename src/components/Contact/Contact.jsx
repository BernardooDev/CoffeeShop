import {
  ContactInformationLeft,
  ContactPage,
  ContactUsP,
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
import { Title } from "../Title/Style";
import { useState } from "react";

function Contact() {
  const initialFormData = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    purpose: "",
    textarea: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3003/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFormData(initialFormData); // Redefinir os campos para os valores iniciais
      } else {
        console.log("Ocorreu um erro durante o envio do formulário.");
      }
    } catch (error) {
      console.log("Ocorreu um erro durante o envio do formulário:", error);
    }
  };

  return (
    <ContactPage>
      <Title>Contact Us</Title>
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
          <InsideContainerRight onSubmit={handleSubmit} method="POST">
            <FormContainerRight>
              <FormContainer>
                <SingleInput>
                  <label htmlFor="name">First Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </SingleInput>
                <SingleInput>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </SingleInput>
                <SingleInput>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </SingleInput>
                <SingleInput>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </SingleInput>
              </FormContainer>
            </FormContainerRight>
            <SelectContainerRight>
              <SingleInputRadio>
                <label htmlForfor="sugestion">Sugestion</label>
                <input
                  type="radio"
                  id="suggestion"
                  name="purpose"
                  value="suggestion"
                  onChange={handleInputChange}
                />
              </SingleInputRadio>
              <SingleInputRadio>
                <label htmlFor="complain">Complain</label>
                <input
                  type="radio"
                  id="complain"
                  name="purpose"
                  value="complain"
                  onChange={handleInputChange}
                />
              </SingleInputRadio>
              <SingleInputRadio>
                <label htmlFor="doubt">Doubt</label>
                <input
                  type="radio"
                  id="doubt"
                  name="purpose"
                  value="doubt"
                  onChange={handleInputChange}
                />
              </SingleInputRadio>
            </SelectContainerRight>
            <SendMessageRight>
              <textarea
                name="textarea"
                rows="10"
                cols="50"
                placeholder="Write something here..."
                value={formData.textarea}
                onChange={handleInputChange}
              ></textarea>
              <button type="submit">Send</button>
            </SendMessageRight>
          </InsideContainerRight>
        </ContainerRight>
      </ContainerAboutContact>
    </ContactPage>
  );
}

export default Contact;
