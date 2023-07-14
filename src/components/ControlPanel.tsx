import {useStore} from "~/store/useStore";
import ButtonAtmo from "~/components/ButtonAtmo";


export default function ControlPanel() {
    const responseMessage = useStore(state => state.responseMessage);


    return (
        <div>
            <h3>SoftwareAusTon</h3>
            <ButtonAtmo groupId={0} label="Atmo1"/>
            <div>Response: {responseMessage}</div>
        </div>
    );
}
