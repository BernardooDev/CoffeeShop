import { ContactPage, ContactUsP, ContactUsTitle, ContainerAboutContact, ContainerLeft, ContainerRight, InsideContainerLeft, InsideContainerRight } from "./Style";

function Contact() {
    return (
        <ContactPage>
            <ContactUsTitle>
                Contact Us
            </ContactUsTitle>
            <ContactUsP>Any question or remarks? Just write for us a message!</ContactUsP>
            <ContainerAboutContact> 
                <ContainerLeft>
                    <InsideContainerLeft>
                        <h1>Contact Information</h1>
                        <p>Say something to start a live chat!</p>
                    </InsideContainerLeft>
                </ContainerLeft>
                <ContainerRight>
                    <InsideContainerRight>
                        
                    </InsideContainerRight>
                </ContainerRight>
            </ContainerAboutContact>
        </ContactPage>
    )
}

export default Contact;