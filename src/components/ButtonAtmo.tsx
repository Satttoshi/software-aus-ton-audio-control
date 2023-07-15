import {useStore} from "~/store/useStore";

type Props = {
    groupId: number;
    label: string
}

export default function ButtonAtmo({groupId, label}: Props) {

    const handlePlayGroup = useStore(state => state.handlePlayGroup);
    const active = useStore(state => state.activeGroup === groupId);

    if (groupId === -1) {
        return (
            <button style={{background: "var(--color3)", marginLeft: "40px"}} onClick={() => handlePlayGroup(groupId, label)}>
                Stop Atmo
            </button>
        )
    }

    return (

        <button className={active ? "active" : ""} onClick={() => handlePlayGroup(groupId, label)}>{label}</button>

    )
}
