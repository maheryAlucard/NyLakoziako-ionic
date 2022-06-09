import * as React from 'react';
import { VStack } from "native-base";

export const ScreenBase = (props: { children: React.ReactNode | JSX.Element }) => {
    return (
        <VStack flex={1}>
            {props.children}
        </VStack>
    )
}