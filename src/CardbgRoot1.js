import React from "react";
import styled from "styled-components";

export const CardbgRoot1 = ({}) => {
  return (
    <CardbgRootRoot>
      <Cardbggraddiv>
        <Headertop>
          <Cardheader>
            <Logofire>
              <Firelogowhite
                src={`https://file.rendit.io/n/8rf2CVvyM4MwZIV2ASN3.png`}
              />
            </Logofire>
          </Cardheader>
          <Cardname>
            <Text1>cHARIZARD</Text1>
          </Cardname>
        </Headertop>
        <Cardsprite>
          <Pokemonimg
            src={`https://file.rendit.io/n/n4EIO5GCpAjyH6dXtb9J.png`}
          />
          <Element1>
            <Bgwhitelogo>
              <FlexRow>
                <Shiny>
                  <Shinyicon
                    src={`https://file.rendit.io/n/h4sIf3iYtA3jvf3m7EwT.svg`}
                  />
                </Shiny>
              </FlexRow>
            </Bgwhitelogo>
            <Cardbgwhite />
          </Element1>
        </Cardsprite>
        <Cardbggradbottom />
      </Cardbggraddiv>
    </CardbgRootRoot>
  );
};

const CardbgRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 250px;
  width: 200px;
`;
const Cardbggraddiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 27px 0px;
  isolation: isolate;

  position: absolute;
  width: 200px;
  height: 250px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  padding: 27px 0px;
  background: linear-gradient(
    121.52deg,
    #f39200 16.89%,
    #ce4a00 66.62%,
    #ffad31 97.58%
  );
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;
`;
const Headertop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 200px;
  height: 21px;
  left: calc(50% - 200px / 2);
  top: 0px;

  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 3;
`;
const Cardheader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 27px 0px 5px;
  isolation: isolate;

  width: 24px;
  height: 21px;

  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
const Logofire = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 16px;
  height: 21px;
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;
`;
const Firelogowhite = styled.img`
  width: 16px;
  height: 15.11px;
`;
const Cardname = styled.div`
  /* card-name */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;

  width: 150px;
  height: 21px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
const Text1 = styled.div`
  /* cHARIZARD */

  width: 150px;
  height: 16px;

  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  /* or 18px */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  border: 0.5px solid #e6855c;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
`;
const Cardsprite = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  isolation: isolate;

  position: absolute;
  width: 196px;
  height: 219px;
  left: calc(50% - 196px / 2);
  top: 21px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 2;
`;
const Pokemonimg = styled.img`
  width: 196px;
  height: 208.68px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 2;
`;
const Element1 = styled.div`
  width: 196px;
  height: 219px;
  position: relative;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/Hr50cHLUNiGemJCe7Ez5.svg");
`;
const Bgwhitelogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 13px 0px 4px;
  isolation: isolate;

  position: absolute;
  width: 196px;
  height: 220px;
  left: calc(50% - 196px / 2);
  top: calc(50% - 220px / 2 + 0.5px);

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  z-index: 0;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  isolation: isolate;

  position: absolute;
  width: 197px;
  height: 22px;
  left: calc(50% - 197px / 2 + 0.5px);
  top: calc(50% - 22px / 2 + 93px);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;
`;
const Shiny = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
padding: 0px 34px 0px 115px;
gap: 10px;

position: absolute;
width: 171px;
height: 22px;
right: 0px;
top: calc(50% - 22px/2);


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
z-index: 0;
}
.shinyicon {
  width: 22px;
  height: 22px;
  flex: none;
order: 0;
flex-grow: 0;
`;
const Shinyicon = styled.img`
  width: 22px;
  height: 22px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Cardbgwhite = styled.div`
  position: absolute;
  width: 196px;
  height: 219px;
  left: calc(50% - 196px / 2);
  top: calc(50% - 398px / 2);

  background: #f6f6f6;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  z-index: 1;
`;
const Cardbggradbottom = styled.div`
  /* card-bg-grad-bottom */

  position: absolute;
  width: 200px;
  height: 9px;
  left: 0px;
  top: 241px;

  background: linear-gradient(
    114.42deg,
    #ce4a00 -8.13%,
    #f59d19 7.33%,
    #f59d19 35.07%,
    #f5c519 46.17%,
    #ffad31 55.29%
  );
  border-radius: 0px 1px 4px 4px;

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
  z-index: 0;
`;
