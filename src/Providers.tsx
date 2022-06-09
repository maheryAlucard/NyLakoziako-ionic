import { NativeBaseProvider } from "native-base";
import { MainNavigation } from "./Navigations/MainNavigation";
import { BrowserRouter as Router } from "react-router-dom";

export const Providers = () => {
    return (
        <NativeBaseProvider>
            <Router>
                <MainNavigation />
            </Router>
        </NativeBaseProvider>
    )
}