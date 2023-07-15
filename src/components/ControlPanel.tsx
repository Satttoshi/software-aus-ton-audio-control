import {useStore} from "~/store/useStore";
import ButtonAtmo from "~/components/ButtonAtmo";
import ButtonFx from "~/components/ButtonFx";
import styled from "styled-components";
import ArrowRight from "~/components/ArrowRight";

export default function ControlPanel() {
    const responseMessage = useStore(state => state.responseMessage);

    return (
        <>
            <h1>Software aus Ton</h1>
            <StyledLine/>
            <h2>Atmo</h2>
            <StyledButtonContainer>
                <ButtonAtmo groupId={0} label="Start Atmo"/>
                <ArrowRight/>
                <ButtonAtmo groupId={1} label="Beichtstuhl geöffnet"/>
                <ArrowRight/>
                <ButtonAtmo groupId={2} label="Geheimraum geöffnet"/>
                <ArrowRight/>
                <ButtonAtmo groupId={3} label="Strom angeschaltet"/>
            </StyledButtonContainer>
            <StyledGap/>
            <StyledButtonContainer>
                <ButtonAtmo groupId={4} label="Gewonnen"/>
                <ButtonAtmo groupId={5} label="Gewonnen English"/>
                <ButtonAtmo groupId={6} label="Verloren"/>
                <ButtonAtmo groupId={7} label="Gewonnen English"/>
                <ButtonAtmo groupId={-1} label="Stop Atmo"/>
            </StyledButtonContainer>
            <StyledLine/>
            <h2>Effekte</h2>
            <StyledButtonContainer>
                <ButtonFx fxId={0} label="Fuchs"/>
                <ButtonFx fxId={1} label="Spieluhr"/>
                <ButtonFx fxId={2} label="Falke"/>
                <ButtonFx fxId={3} label="Klavier"/>
                <ButtonFx fxId={4} label="Baby"/>
                <ButtonFx fxId={5} label="Lachen"/>
                <ButtonFx fxId={6} label="Klopfen"/>
                <ButtonFx fxId={7} label="Pfeifen"/>
                <ButtonFx fxId={8} label="Blutkiste"/>
                <ButtonFx fxId={9} label="Atmen"/>
                <ButtonFx fxId={10} label="Klirren"/>
                <ButtonFx fxId={11} label="Lachen"/>
                <ButtonFx fxId={12} label="Donner 1"/>
                <ButtonFx fxId={13} label="Donner 2"/>
            </StyledButtonContainer>
            <StyledLine/>
            <div>Response: {responseMessage}</div>
        </>
    );
}

const StyledButtonContainer = styled.section`

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 740px;

  flex-wrap: wrap;

  .active {
    background-color: var(--color2);
  }

  button {
    appearance: none;
    border: none;
    cursor: pointer;
    border-radius: 6px;

    background-color: var(--color4);
    color: var(--black);

    font-weight: 600;
    font-size: 1rem;
    width: 120px;
    height: 60px;

    box-shadow: 0 4px 0 rgba(255, 255, 255, 0.3);

    &:hover {
      background-color: var(--color1);
    }

    &:active {
      box-shadow: 0 2px 0 rgba(255, 255, 255, 0.3);
      transform: translateY(2px);
    }

  }

`;

const StyledLine = styled.div`
  border: 1px solid var(--white);
  margin: 2rem 0;
  width: 500px;
`;

const StyledGap = styled.div`
  margin: 1.5rem 0;
`;