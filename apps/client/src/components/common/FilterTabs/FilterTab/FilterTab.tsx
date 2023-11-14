import styled from "styled-components";
import Text from "ui/components/Text";
import { color } from "ui/styles";

interface TabProps {
    name: string;
    $active: boolean;
    onClick: () => void;
}

function FilterTab({name, $active, onClick}:TabProps): JSX.Element{
    return (
        <StyledTab $active={$active} onClick={onClick}>
            <FilterText $active={$active}>{name}</FilterText>
        </StyledTab>
    );
};

export default FilterTab;

const StyledTab = styled.div<{$active?:boolean}>`
    word-break: keep-all;
    border-radius: 20px 20px 20px 10px;
    border: ${props => props.$active ? `2px solid ${color.yellow}` : `2px solid ${color.gray100}`};
    padding: 20px 30px;
    transition: 0.3s ease;
    cursor: pointer;
`

const FilterText = styled.span<{$active?:boolean}>`
    color: ${props => props.$active ? `${color.yellow}` : `${color.gray500}`};
    font-family: "nanumSquareNeo";
    font-weight: 700;
    font-size: 18px;
`