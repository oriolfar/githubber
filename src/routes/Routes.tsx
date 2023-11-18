// Routes.tsx
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../pages/layout/Layout"
import Home from "../pages/home/MainPage"

const Routes = () => (
    <Router>
        {/* <ChakraLink as={ReactRouterLink} to="/home"> */}
        {/* TODO add possibility to change between layouts */}
        <Layout pageProp="valueForHome">
            <Home />
        </Layout>
        {/* </ChakraLink> */}
    </Router>
);

export default Routes;