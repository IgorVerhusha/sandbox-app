import React from 'react'
import styled from 'styled-components'


const StyledBurgerButton = styled.div`
  width: 30px;
  height: 25px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    width: 30px;
    background-color: ${props => props.color || props.theme.colors.secondary};
    height: 4px;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 30px;
    background-color: ${props => props.color || props.theme.colors.secondary};
    height: 4px;
  }

  span {
    position: absolute;
    top: 11px;
    width: 30px;
    background-color: ${props => props.color || props.theme.colors.secondary};
    height: 4px;
  }
`

const BurgerButton = ({setMenuIsActive, menuIsActive}) => {
    return (
        <StyledBurgerButton onClick={() => setMenuIsActive(!menuIsActive)}>
            <span/>
        </StyledBurgerButton>
    )
}

export default BurgerButton