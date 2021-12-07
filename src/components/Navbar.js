import styled from 'styled-components'
import { pizzaRed } from '../Styles/colors'

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
`

export default function Navbar() {
  return <NavbarStyled>Hello Navbar</NavbarStyled>
}
