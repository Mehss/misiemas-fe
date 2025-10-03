import React, { memo } from 'react'

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Box, Button, Modal, } from '@mui/material'


export interface IModal {
    isOpen: boolean
    toggle: () => void
    children?: React.ReactNode
}

const ModalComponent: React.FC<IModal> = (props: IModal) => {
    const { isOpen, toggle } = props
    return (
        <>
            <Modal
                style={{ top: '30%', left: '42%',}}
                open={isOpen}
            >
                <Box style={{ outline: 'none', borderRadius: 10, backgroundColor: '#ffff', gridTemplateRows: 'auto auto auto auto', display: 'grid', justifyContent: 'center',  width: '20vw', height: '40vh', padding:'1.5vmin'}}>
                    <ErrorOutlineIcon style={{ fontSize: '15vmin', color: 'red', display: 'flex', justifySelf: 'center' }} />
                    <div style={{ fontSize: '3.5vmin', fontWeight: 600 }}>Token is Expired</div>
                    <div style={{ display: 'flex', justifyContent: 'center', fontSize: '2vmin' }}>Please re-login!</div>
                    <Button style={{ display: 'flex', justifySelf: 'center', width: '10vw', marginTop: '1vh', height: '5vh', fontSize: '2vmin' }} onClick={toggle} color="primary" variant="contained">
                        Relogin
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default memo(ModalComponent)