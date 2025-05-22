"use client"
import React, { useState } from "react";
import Modal from "@/components/Modal";

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const ShowModal = ()=> {
        setShowModal(true);
    }

    return (
        <div>
            <h2>Modal</h2>
            <button onClick={ShowModal}>Open Modal</button>
            <Modal showFlag={showModal} setShowModal={setShowModal} content="モーダル内容" />
        </div>
    )
}