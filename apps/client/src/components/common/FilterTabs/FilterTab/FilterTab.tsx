import styled from "styled-components";
import { color } from "ui/styles";

interface TabProps {
    name: string;
}

function FilterTab({name}:TabProps): JSX.Element{
    return (
        <StyledTab>
            <FilterText>{name}</FilterText>
        </StyledTab>
    );
};

export default FilterTab;

const StyledTab = styled.div`
    word-break: keep-all;
    border-radius: 10px 10px 10px 0;
    border: 1px solid ${color.gray100};
    padding: 0.75rem 1.5rem;
`

const FilterText = styled.span`
    font-size: 1.125rem;
    color: ${color.gray500};
    font-weight: 300;
`