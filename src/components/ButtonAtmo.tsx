import {useStore} from "~/store/useStore";

type Props = {
    groupId: number;
    label: string
}

export default function ButtonAtmo({groupId, label}: Props) {

    const handlePlayGroup = useStore(state => state.handlePlayGroup);

    return (
            <button onClick={() => handlePlayGroup(groupId)}>{label}</button>
    )
}
