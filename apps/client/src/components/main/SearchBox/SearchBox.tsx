import styled from "styled-components";
import { color } from "ui/styles";
import Button from "ui/components/Button"
import SearchIcon from "client/assets/SearchIcon";

function SearchBox (): JSX.Element{
    return(
        <Box>
            <SearchBar>
                <SearchIcon />
                <Input placeholder="원하는 상품을 검색해 보세요."/>
            </SearchBar>    
            <Button>
                검색
            </Button>
        </Box>
    );
}


export default SearchBox;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5rem 0;
    gap: 2rem;
`

const SearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    border-radius: 20px;
    border:  2px solid ${color.gray50};
    height: 3.875rem;
    width: 100%;
    height: 100%;
    padding: 20px;

    transition: 0.3s ease;
    &:focus-within{
        border-color: ${color.gray400};  
    }
`

const Input = styled.input`
    outline: none;
    border: none;
    font-size: 1.125rem;
    width: 100%;
    height: 100%;
    
    &::placeholder{
        font-weight: 300;
        color: ${color.gray400}    
    }
`