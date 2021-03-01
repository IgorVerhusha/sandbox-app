import React from 'react'
import styled from 'styled-components'
import Flex from './Flex.jsx'

const StyledNavbar = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50px;
  left: 0;
  transform: ${props => props.menuIsActive? 'translateX(0)' :  'translateX(-130%)'};
  transition: all 0.2s;

`
const StyledNavbarContent = styled.div`
  background-color: ${props => props.color || props.theme.colors.tertiary};
  width: 25%;
  height: 100%;
  padding: 10px;
  transition: all 0.4s;
  @media ${props => props.theme.media.phone}{
    width: 100%;
  }
`

const StyledNavbarHeader = styled.h2`

`

const StyledNavbarList = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-bottom: 8px;
  }
`

const StyledBlur = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  position: absolute;
  left: 25%;
  @media ${props => props.theme.media.phone}{
    backdrop-filter: none;
  }
`

const Navbar = ({header, items, menuIsActive, setMenuIsActive}) => {
    return (
        <StyledNavbar menuIsActive={menuIsActive} onClick={()=>setMenuIsActive(!menuIsActive)}>
            <StyledBlur/>
            <StyledNavbarContent onClick={e => e.stopPropagation()}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                    <StyledNavbarHeader>{header}</StyledNavbarHeader>
                    <StyledNavbarList>
                        {items.map((item => <li key={`${item.value}_${item.index}`}><span
                            className="material-icons">all_inbox</span><a href={item.href}>{item.value}</a></li>))}
                    </StyledNavbarList>
                </Flex>
            </StyledNavbarContent>
        </StyledNavbar>
    )
}

export default Navbar