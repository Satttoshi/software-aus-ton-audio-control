import {useStore} from "~/store/useStore";
import ButtonAtmo from "~/components/ButtonAtmo";
import ButtonFx from "~/components/ButtonFx";
import styled from "styled-components";
import ArrowRight from "~/components/ArrowRight";

export default function ControlPanel() {
    const responseMessageGroup = useStore(state => state.responseMessageGroup);
    const responseMessageFx = useStore(state => state.responseMessageFx);

    return (
        <>
            <h1>Software aus Ton</h1>
            <StyledLine/>
            <h2>Hintergrundmusik (Atmosphäre)</h2>
            <StyledButtonContainer>
                <ButtonAtmo groupId={0} label="Start Atmo"/>
                <ArrowRight/>
                <ButtonAtmo groupId={1} label="Beichtstuhl geöffnet"/>
                <ArrowRight/>
                <ButtonAtmo groupId={2} label="Geheimraum geöffnet"/>
                <ArrowRight/>
                <ButtonAtmo groupId={3} label="Strom angeschaltet"/>
            </StyledButtonContainer>

            <StyledLine/>
            <h2>Soundeffekte</h2>
            <StyledButtonContainer>
                <ButtonFx fxId={140} label="Hinweiston"/>
                <ButtonFx fxId={3} label="Fuchs"/>
                <ButtonFx fxId={8} label="Spieluhr"/>
                <ButtonFx fxId={4} label="Falke"/>
                <ButtonFx fxId={7} label="Klavier"/>
                <ButtonFx fxId={0} label="Baby"/>
                <ButtonFx fxId={6} label="Lachen"/>
                <ButtonFx fxId={5} label="Klopfen"/>
                <ButtonFx fxId={19} label="Pfeifen"/>
                <ButtonFx fxId={12} label="Blutkiste"/>
                <ButtonFx fxId={9} label="Atmen"/>
                <ButtonFx fxId={11} label="Klirren"/>
                <ButtonFx fxId={13} label="Lachen"/>
                <ButtonFx fxId={15} label="Donner 1"/>
                <ButtonFx fxId={16} label="Donner 2"/>
            </StyledButtonContainer>
            <StyledLine/>
            <h2>Spielende</h2>
            <StyledButtonContainer>
                <ButtonAtmo groupId={4} label="Gewonnen"/>
                <ButtonAtmo groupId={5} label="Gewonnen English"/>
                <ButtonAtmo groupId={6} label="Verloren"/>
                <ButtonAtmo groupId={7} label="Verloren English"/>
                <ButtonAtmo groupId={-1} label="Stop Atmo"/>
            </StyledButtonContainer>
            <StyledLine/>
            <div>{responseMessageGroup}</div>
            <div>{responseMessageFx}</div>
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
  margin: 2rem 0 1rem 0;
  width: 700px;
`;
