import { OrderNow, DetailsOrder } from "./Style";
import { Title } from "../Title/Style";

function orderNow() {
  return (
    <>
      <OrderNow>
        <Title style={{ fontSize: "1.6rem" }}>Order right now!</Title>
        <DetailsOrder>
          Welcome to Cappucino, the newest addition to the thriving coffee scene
          in town. Nestled in the heart of our vibrant community, Cappucino is
          a haven for coffee enthusiasts, offering a delightful experience like
          no other. As you step into our cozy and inviting space, the aromatic
          embrace of freshly brewed coffee fills the air. The ambiance is a
          perfect blend of modern chic and rustic charm, designed to create a
          soothing environment where you can relax, unwind, and savor the rich
          flavors of our exquisite coffee offerings.
        </DetailsOrder>
      </OrderNow>
    </>
  );
}

export default orderNow;
