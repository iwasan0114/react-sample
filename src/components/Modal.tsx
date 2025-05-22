import React from "react"

const Modal = (props: { showFlag: boolean, setShowModal: (showFlag: boolean) => void, content: string }) => {

    const closeModal = () => {
        props.setShowModal(false);
    }

    return props.showFlag ? (
        <div className="fixed inset-0 bg-gray-500/30 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <p className="mb-4">{props.content}</p>
                <button 
                    onClick={closeModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    ) : null
}

export default Modal;

