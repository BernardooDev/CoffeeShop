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
  SingleDataAboutLeft,
} from "./Style";

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

        </BellowTitleLeft>
        <InfosAboutLeft>
            <DataAboutLeft>
            <SingleDataAboutLeft></SingleDataAboutLeft>
            <SingleDataAboutLeft></SingleDataAboutLeft>
            <SingleDataAboutLeft></SingleDataAboutLeft>
            </DataAboutLeft>
        </InfosAboutLeft>
      </LeftSection>
      <RightSection>
        <ImageRight />
        <DetailsImageRight></DetailsImageRight>
      </RightSection>
    </AboutSection>
  );
}

export default AboutPage;
