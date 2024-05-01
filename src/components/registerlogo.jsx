import React from "react";
import styled from "styled-components";
import { IconGoogle } from "./logo";
import { IconApple } from "./logo";
import { IconFacebook } from "./logo";

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0px;

    @media screen and (max-width: 768px) {
    }
`;

export function RegisterLogo() {
    return (
        <LogoContainer>
            <IconGoogle />
            <IconFacebook />
            <IconApple />
        </LogoContainer>
    )
}
