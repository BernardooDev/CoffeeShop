import {
  AboutSection,
  BellowTitleLeft,
  DataAboutLeft,
  DetailsImageRight,
  ImageRight,
  InfosAboutLeft,
  LeftSection,
  MainTitleLeft,
  RightSection,
  SeeMoreButton,
  SingleDataAboutLeft,
} from "./Style";

import Bottle from "../../assets/Bottle.png"

function AboutPage() {
  return (
    <AboutSection>
      <LeftSection>
        <MainTitleLeft>
          <h1>About Us</h1>
          <p>
            At CoffeeShop, we are passionate about crafting exceptional coffee
            experiences. We believe that a great cup of coffee can bring joy,
            inspire creativity, and create meaningful connections.
          </p>
          <p>
            We believe that coffee is more than just a beverage; it's a sensory
            experience. From the rich aroma that fills the air to the indulgent
            flavors that dance on your taste buds, every sip tells a story.
          </p>
        </MainTitleLeft>
        <BellowTitleLeft>
          <SeeMoreButton>Discover More</SeeMoreButton>
        </BellowTitleLeft>
        <InfosAboutLeft>
            <DataAboutLeft>
            <SingleDataAboutLeft>
              <h1>1.00M<span>+</span></h1>
              <p>Clients</p>
              </SingleDataAboutLeft>
            <SingleDataAboutLeft>
              <h1>21<span>+</span></h1>
              <p>Countries</p>
            </SingleDataAboutLeft>
            <SingleDataAboutLeft>
              <h1>40<span>+</span></h1>
              <p>Products</p>
            </SingleDataAboutLeft>
            </DataAboutLeft>
        </InfosAboutLeft>
      </LeftSection>
      <RightSection>
        <ImageRight><img src={Bottle}/></ImageRight>
        <DetailsImageRight><p>Special Offer</p><h1>Discount 10%</h1></DetailsImageRight>
      </RightSection>
    </AboutSection>
  );
}

export default AboutPage;
