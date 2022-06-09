import { AspectRatio, Box, Button, HStack, Image, Text, useTheme, VStack } from "native-base";
import { ImageGenerator } from "../../Tools/Generator";
import { BiRightArrowAlt } from 'react-icons/bi';

export const HomeHeader = () => {
    const { colors } = useTheme();
    return (
        <Box position="relative">
            <AspectRatio ratio={1.4}>
                <Image source={{ uri: ImageGenerator() }} alt="home header" />
            </AspectRatio>
            <VStack bottom={0} position="absolute" bg="rgba(0,0,0,0.5)" p={2} w="100%">
                <Text fontSize={16} color={colors.white} >Recette du Jours</Text>
                <HStack alignItems="center" justifyContent="space-between">
                    <Text fontSize={18} fontWeight="semibold" color={colors.white} >Titre recette</Text>
                    <Button endIcon={<BiRightArrowAlt color={colors.white} />} _text={{ color: colors.white }} variant="unstyled" size="sm">Voir</Button>
                </HStack>
                {/* <div style={{ width: '100%', borderTopWidth: 1, borderTopStyle: "solid", borderColor: colors.white }} /> */}
            </VStack>
        </Box>
    )
}