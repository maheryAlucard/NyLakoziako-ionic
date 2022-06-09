import { HStack, useTheme } from "native-base"

export const AppHeader = () => {
    const { colors } = useTheme();

    return (
        <HStack
            p={2}
            alignItems="center"
            justifyContent="space-around"
            borderBottomWidth={1}
            borderColor={colors.gray[300]}>

        </HStack>
    )
}