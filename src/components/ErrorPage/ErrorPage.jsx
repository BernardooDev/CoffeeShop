import { ErrorPage, ImgFailed } from "./Style";
import Cry from "../../assets/Cry.png";
import { Title } from "../Title/Style";

function errorPage() {
    return (
        <ErrorPage>
            <ImgFailed src={Cry} />
            <Title>Page Not Found</Title>
        </ErrorPage>
    )
}

export default errorPage;