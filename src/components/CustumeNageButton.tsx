import * as React from 'react';
import { Center, Text, useTheme } from "native-base"

export const CustomeNaveButton = (props: {
    onPress: () => void,
    icon: React.ReactNode | JSX.Element
    label?: string,
    isActive?: boolean,
}) => {
    const { onPress, icon, label, isActive } = props;
    const { colors } = useTheme();

    return (
        <div onClick={onPress}>
            <Center borderRadius={5} bgColor={isActive ? colors.gray[100] : undefined} p={2}>
                {icon}
                <Text>{label}</Text>
            </Center>
        </div>
    )
}