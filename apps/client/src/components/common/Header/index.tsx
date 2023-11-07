import styled from 'styled-components';
import { color } from 'ui/styles';


interface HeaderProps {
    any?: any;
}

function Header ({
    any,
  }: HeaderProps): JSX.Element {
    return (
      <>
        {any}
      </>
    );
  }
  
export default Header;


