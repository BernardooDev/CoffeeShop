import { Logo } from "./Style";
import { NavLink } from "react-router-dom"

function logo() {
  return <Logo><NavLink to="/">Cappuccino</NavLink></Logo>;
}

export default logo;
