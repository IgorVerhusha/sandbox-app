import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || `row`};
  align-items: ${props => props.alignItems || `stretch`};
  justify-content: ${props => props.justifyContent || `flex-start`};
  margin: ${props => props.margin || 0};
  height: 100%;
`

const Flex = (props) => {
    return <StyledFlex {...props}/>
}

export default Flex

Flex.propTypes = {
    flexDirection: PropTypes.string,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
}