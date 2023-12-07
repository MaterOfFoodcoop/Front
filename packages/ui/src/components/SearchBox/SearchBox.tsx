import styled from "styled-components";
import { color, font } from "ui/styles";
import Button from "ui/components/Button/SearchButton";
import { SearchIcon } from "ui/icon";
import Text from "ui/components/Text";

interface SearchBox {
  placeholder: string;
  buttonText?: string;
}

function SearchBox({ placeholder, buttonText }: SearchBox): JSX.Element {
  return (
    <Box>
      <SearchBar>
        <SearchIcon />
        <Input placeholder={placeholder} />
      </SearchBar>
      {buttonText && 
      <Button>
        <Text $fontType={"Button"}>{buttonText}</Text>
      </Button>}
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
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  border-radius: 20px;
  border: 3px solid ${color.gray50};
  height: 3.875rem;
  width: 100%;
  height: 100%;
  padding: 20px 50px;

  transition: 0.3s ease;
  &:focus-within {
    border-color: ${color.gray400};
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1.125rem;
  width: 100%;
  height: 100%;

  &::placeholder {
    font-family: "nanumSquareNeo";
    color: ${color.gray400};
    ${font["Placeholder"]};
  }
`;
