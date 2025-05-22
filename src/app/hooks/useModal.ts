import { useRecoilState, SetterOrUpdater } from "recoil"
import { ModalVisibilityState, Modaltype } from "@/states/modal"

type Response = [
    boolean,
    SetterOrUpdater<boolean>
]

const useModal = (modalType: ModalType): Response => {
    const [isVisible, setVisible] = useRecoilState(
        ModalVisibilityState(modalType)
    )

    return [isVisible, setVisible]
}