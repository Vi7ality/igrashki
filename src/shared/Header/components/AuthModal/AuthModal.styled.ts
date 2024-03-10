import styled from "styled-components";

export const AuthModalWrap = styled.div`
 position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);

        .error {
        color: red;
        font-size: 12px;
        margin-left: 10px;
    }
    `

    export const AuthForm = styled.div`
    position: relative;
    min-width: 400px;
    background-color: #f5f4fe;
    padding: 30px 30px 40px;
    border-top: 5px solid #fb0;
    box-shadow: 0 20px 60px rgb(0 0 0 / 50%);
    text-align: center;
    `