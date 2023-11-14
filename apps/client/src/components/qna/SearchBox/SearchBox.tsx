import styled from "styled-components";
import { color, font } from "ui/styles";
import Button from "ui/components/Button"
import SearchIcon from "client/assets/SearchIcon";

function SearchBox (): JSX.Element{
    return(
        <Box>
            <SearchBar>
                <SearchIcon />
                <Input placeholder="Q&A를 검색해 보세요."/>
            </SearchBar>    
            <Button>
                질문 작성하기
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
    word-break: keep-all;
`

const SearchBar = styled.div`
    background-color: ${color.gray50};
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
    background-color: ${color.gray50};
    outline: none;
    border: none;
    font-size: 1.125rem;
    width: 100%;
    height: 100%;
    
    &::placeholder{
        ${font['Placeholder']};
        color: ${color.gray400}    
    }
`