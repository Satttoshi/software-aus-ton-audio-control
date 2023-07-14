import {create} from 'zustand';


type Store = {
    responseMessage: string;
    handlePlayGroup: (id: number) => Promise<void>;
    handlePlayFx: (id: number) => Promise<void>;
}

export const useStore = create<Store>((set) => ({
// STORE START

        responseMessage: '',

        handlePlayGroup: async (id: number) => {
            const group_id = id.toString();
            const response = await fetch('/api/audioInterface', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ip: '127.0.0.1', group_id}),
            });
            const message = await response.text();
            set({responseMessage: message});
        },

        handlePlayFx: async(id: number) => {
            const fx_id = id.toString();
            const response = await fetch('/api/audioInterface', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ip: '127.0.0.1', fx_id}),
            });
            const message = await response.text();
            set({responseMessage: message});
        },
    }

// STORE END
));