import React from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton.jsx'
import Flex from './Flex.jsx'


const StyledHeader = styled.nav`
  height: 50px;
  width: 100%;
  background: ${props => props.color || props.theme.colors.primary};
  position: fixed;
  z-index: 50;
  top: 0;
`

const Header = (props) => {
    return (
            <StyledHeader >
            <Flex alignItems={'center'}>
                <BurgerButton {...props}/>
            </Flex>
            </StyledHeader>
    )
}

export default Header