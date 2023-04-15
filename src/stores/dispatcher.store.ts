import { store } from "./web.store";

export const DISPATCHER = (action: string, data = undefined) => {

    switch(action) {
        case 'INIT_STORE': 
            store.init();
        break;
       

    }
}