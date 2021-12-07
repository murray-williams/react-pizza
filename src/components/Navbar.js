import styled from 'styled-components'
import { pizzaRed } from '../Styles/colors'
import { Title } from '../Styles/title'

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
`

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
`

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo>Sliceline</Logo>
    </NavbarStyled>
  )
}
