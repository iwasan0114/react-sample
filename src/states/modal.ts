import { atomFamily } from "recoil"
 
export type ModalType =
| "concat"
| "faq"
| "confirm"

export const ModalVisibilityState = atomFamily<boolean, ModalType>({
    key: "ModalVisibilityState",
    default: false,
})
