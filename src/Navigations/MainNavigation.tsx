import { VStack } from "native-base";
import { Routes, Route } from "react-router-dom";
import { AppHeader } from "../components/AppHeader";
import { CustomNave } from "../components/CustomeNave";
import { HomePage } from "../pages/Home";
import { ListsPage } from "../pages/Lists";
import { MyRecipesPage } from "../pages/MyRecipes";
import { SettingsPage } from "../pages/Settings";
import { ShopePage } from "../pages/Shop";
import { PAGE } from "../Static/NavigationRef";

export const MainNavigation = () => {
    return (
        <VStack flex={1}>
            <AppHeader />
            <VStack flex={1}>
                <Routes>
                    <Route path={PAGE.HOME} element={<HomePage />} />
                    <Route path={PAGE.LISTS} element={<ListsPage />} />
                    <Route path={PAGE.SHOP} element={<ShopePage />} />
                    <Route path={PAGE.MY_RECIPES} element={<MyRecipesPage />} />
                    <Route path={PAGE.SETTING} element={<SettingsPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </VStack>
            <CustomNave />
        </VStack>
    )
}