import type { RuleSet} from 'styled-components';
import { css } from 'styled-components';

const fontGenerator = (
  weight: number,
  size: number,
): RuleSet<object> => css`
    font-family: "nanumSquareNeo";
    font-weight: ${weight};
    font-size: ${size}rem;
`;

const font = {
 Header1: fontGenerator(900, 3),
 Header2: fontGenerator(400, 1.875),
 Header3: fontGenerator(800, 1.5),

 SubTitle1: fontGenerator(700, 1.5),
 SubTitle2: fontGenerator(800, 1.125),
 SubTitle3: fontGenerator(800, 1),

 Body: fontGenerator(400, 1.5),
 Button: fontGenerator(700, 1.125),
 Placeholder: fontGenerator(700, 1.125),
};

export default font;
