import styled from "styled-components";

export const ContactBlock = styled.ul `
    width: 432px;
    height: 200px;
    /* background-color: #686767; */
    padding: 10px 0;

    li{
        display: flex;
        width: 385px;
        justify-content: space-between;
        margin: 4px;
        padding: 5px 7px 5px 14px;
        background-color: #fff;
        border-radius: 4px;
    }

    li > p{
        font-size: 1.3em;
        margin: 10px 0;
    }
`;