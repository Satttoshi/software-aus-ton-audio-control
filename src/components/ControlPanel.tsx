import {useStore} from "~/store/useStore";
import ButtonAtmo from "~/components/ButtonAtmo";
import ButtonFx from "~/components/ButtonFx";
import styled from "styled-components";

export default function ControlPanel() {
    const responseMessage = useStore(state => state.responseMessage);

    return (
        <>
            <h3>SoftwareAusTon</h3>
            <StyledButtonContainer>
                <ButtonAtmo groupId={0} label="Start Atmo"/>
                <ButtonAtmo groupId={1} label="Beichtstuhl geöffnet"/>
                <ButtonAtmo groupId={2} label="Geheimraum geöffnet"/>
                <ButtonAtmo groupId={3} label="Strom angeschaltet"/>
            </StyledButtonContainer>
            <br/>
                <StyledButtonContainer>
                <ButtonAtmo groupId={4} label="Gewonnen"/>
                <ButtonAtmo groupId={5} label="Gewonnen English"/>
                <ButtonAtmo groupId={6} label="Verloren"/>
                <ButtonAtmo groupId={7} label="Gewonnen English"/>
                <ButtonAtmo groupId={-1} label="Stop Atmo"/>
            </StyledButtonContainer>
            <br/>
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
            <div>Response: {responseMessage}</div>
        </>
    );
}

const StyledButtonContainer = styled.section`
`;
