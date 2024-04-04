import { Outlet } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Sign } from "../../components/Sign";

export function PageBase(){
    return(
        <main>
            <Sign />
            <Header />
            <Container>
                <Outlet/>
            </Container>
            <Footer />
        </main>
    )
}