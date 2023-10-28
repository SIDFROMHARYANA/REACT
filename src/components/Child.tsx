import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Child = forwardRef((props, ref) => {
    const [openModal, setOpenModal] = useState(false);

    useImperativeHandle(ref, () => ({
        openModalTrigger: (value: boolean) => setOpenModal(value)
    }))

    if(!openModal) return null;
    return (
        <div>
            <p>This is a modal!</p>
            <button onClick={() => setOpenModal(false)}> Bannd karr </button>
        </div>
    )
})

export default Child