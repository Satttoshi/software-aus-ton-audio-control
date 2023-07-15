import {useStore} from "~/store/useStore";

type Props = {
    fxId: number;
    label: string;
}

export default function ButtonFx({fxId, label}: Props) {
    const handlePlayFx = useStore(state => state.handlePlayFx);

    return (
        <button onClick={() => handlePlayFx(fxId)}>{label}</button>
    )
}