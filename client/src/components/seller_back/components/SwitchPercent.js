import React from 'react'
import styled from 'styled-components'

// Styled Components
const StyledSwitchButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    width: 38px;
    background-color: ${props => (props.active ? '#f15a24' : '#132948')};
    border-radius: 11px;
    border: 1px solid ${props => (props.active ? '#22E222' : '#ECECEC')};
    box-sizing: border-box;
    padding: 0;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    outline: none;
    &::after {
      content: '';
      width: 20px;
      height: 20px;
      background-color: #ffffff;
      border-radius: 50%;
      box-shadow: 0px 1px 3px rgba(30, 30, 30, 0.3);
      transition: all 300ms ease-in-out;
      transform: ${props =>
        props.active ? 'translate(16px)' : 'translate(0)'};
      display: block;
    }
  }
  span {
    color: #00000;
    font-size: 18px;
    margin-left: 10px;
  }
`

// Switch Button Component
// 透過 props 接收外部傳進來三個屬性的值
// 1. type: 設置 Switch Button 按鈕類型。
// 2. active: Switch Button 狀態。
// 3. clicked: toggleSwitchButton (Method) 切換 Switch Button。
const SwitchPercent = props => (
  <StyledSwitchButton active={props.active}>
    <button type={props.type} onClick={props.clicked}></button>
    <span>{props.active ? '減價金額' : '打折%數'}</span>
  </StyledSwitchButton>
)

export default SwitchPercent
