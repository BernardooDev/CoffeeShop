import React from "react";
import Section  from "../components/Section/Section";
import OrderNow from "../components/OrderNow/OrderNow";
import Footer from "../components/Footer/Footer"
import ShowProducts  from "../components/OurProducts/OurProducts";
import Comments from "../components/Comments/Comments";

export const Home = () => {
  return (
    <>
      <Section>
      </Section>
      <OrderNow>
      </OrderNow>
      <ShowProducts />
      <Comments />
      <Footer />
    </>
  );
};
