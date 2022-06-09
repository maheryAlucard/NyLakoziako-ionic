import { HStack, useTheme } from "native-base"
import { _zIndexMin } from "../Static/globals"
import { CustomeNaveButton } from "./CustumeNageButton"
import { BiHome, BiShoppingBag, BiCustomize } from 'react-icons/bi';
import { GrUnorderedList } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import { PAGE } from "../Static/NavigationRef";
import { useNavigate, useLocation } from "react-router-dom";
// import { _log } from "../Utils/Console";

export const CustomNave = () => {
    const { colors } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const _navigate = (path: PAGE) => {
        navigate(path);
    }

    const getIconCcolor = (path: PAGE) => {
        return location.pathname === path ? 800 : 400
    }

    const isActive = (path: PAGE) => {
        return location.pathname === path
    }

    const firstPath = location.pathname === "/";

    return (
        <HStack
            zIndex={_zIndexMin}
            space={2}
            alignItems="center"
            justifyContent="space-around"
            p="1"
            borderTopWidth={1}
            borderColor={colors.gray[300]}
        >
            <CustomeNaveButton onPress={() => _navigate(PAGE.HOME)} isActive={isActive(PAGE.HOME) || firstPath} icon={<BiHome color={colors.gray[getIconCcolor(PAGE.HOME)]} size={24} />} />
            <CustomeNaveButton onPress={() => _navigate(PAGE.LISTS)} isActive={isActive(PAGE.LISTS)} icon={<GrUnorderedList color={colors.gray[getIconCcolor(PAGE.LISTS)]} size={24} />} />
            <CustomeNaveButton onPress={() => _navigate(PAGE.SHOP)} isActive={isActive(PAGE.SHOP)} icon={<BiShoppingBag color={colors.gray[getIconCcolor(PAGE.SHOP)]} size={24} />} />
            <CustomeNaveButton onPress={() => _navigate(PAGE.MY_RECIPES)} isActive={isActive(PAGE.MY_RECIPES)} icon={<BiCustomize color={colors.gray[getIconCcolor(PAGE.MY_RECIPES)]} size={24} />} />
            <CustomeNaveButton onPress={() => _navigate(PAGE.SETTING)} isActive={isActive(PAGE.SETTING)} icon={<FiSettings color={colors.gray[getIconCcolor(PAGE.SETTING)]} size={24} />} />
        </HStack>
    )
}