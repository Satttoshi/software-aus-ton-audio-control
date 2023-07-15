import {create} from 'zustand';


type Store = {
    responseMessageGroup: string;
    responseMessageFx: string;
    activeGroup: number;
    handlePlayGroup: (id: number, label: string) => Promise<void>;
    handlePlayFx: (id: number, label: string) => Promise<void>;
}

export const useStore = create<Store>((set) => ({
// STORE START

        responseMessageGroup: '',
        responseMessageFx: '',
        activeGroup: -1,

        handlePlayGroup: async (id: number, label: string) => {
            const group_id = id.toString();
            const response = await fetch('/api/audioInterface', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({group_id, label}),
            });
            const message = await response.text();
            set({responseMessageGroup: message});
            set ({activeGroup: id});
        },

        handlePlayFx: async(id: number, label: string) => {
            const fx_id = id.toString();
            const response = await fetch('/api/audioInterface', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({fx_id, label}),
            });
            const message = await response.text();
            set({responseMessageFx: message});
        },
    }

// STORE END
));