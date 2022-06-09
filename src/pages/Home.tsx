import { Text } from "native-base"
import { HomeHeader } from "../components/Home/Header"
import { ScreenBase } from "../components/ScreenBase"

export const HomePage = () => {
    return (
        <ScreenBase>
            <HomeHeader />
            <Text>HomePage</Text>
        </ScreenBase>
    )
}