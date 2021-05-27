import {rerenderEntireTree} from "./render";

let state = {
    item1: null,
    item2: null,
    op:null,
    result:null
}

// + 10  - 11   * 12     / 13     = 14
export let keyPressed = (keyId) => {

    if (keyId == 14 || (keyId > 9 && state.item2 != null)){
        switch (state.op){
            case 10:
                state.result = state.item1 + state.item2;
                break;
            case 11:
                state.result = state.item1 - state.item2;
                break;
            case 12:
                state.result = state.item1 * state.item2;
                break;
            case 13:
                state.result = state.item1 / state.item2;
                break;
        }

    }
    else if (keyId < 10){
        if (state.item1==null){
            state.item1=keyId;
        }

        else if (state.op == null){
            state.item1 = state.item1 * 10 + keyId ;
        }

        else if (state.item2==null) {
            state.item2=keyId;
        }

        else {
            state.item2 = state.item2 * 10 + keyId ;
        }
    }
    else {
        state.op=keyId;
    }
    // rerenderEntireTree(state);
}

export default state;