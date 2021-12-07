import styled from 'styled-components'
import { pizzaRed } from '../Styles/colors'
import { Title } from '../Styles/title'

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 3px 4px #3a0c0269;
`

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo>Sliceline 🍕</Logo>
    </NavbarStyled>
  )
}
