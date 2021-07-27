import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
border-radius: 50px;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
font-weight: bold;
white-space: nowrap;
outline: none;
border: none;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.3s ease-in-out;
background: ${({primary}) => (primary ? '#fff' : '#1d1f4b')};
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#1d1f4b' : '#fff')};
box-shadow: 1px 1px 11px 0px #FFCBA4;

&:hover {
  transition: all 0.3s ease-in-out;
  background: ${({primary}) => (primary ? '#1d1f4b' : '#FFCBA4')};
  color: ${({dark}) => (dark ? '#FFCBA4' : '#1d1f4b')};

}
`