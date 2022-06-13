import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Result = ({ result, setResult }) => {
    const [openModal, setOpenModal] = useState(false)
    const [modalText, setModalText] = useState('')

    const handleOpenModal = (str) => {
        setModalText(str)
        setOpenModal(true)
    }
    const handleCloseModal = () => setOpenModal(false)

    const boxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #1976d2',
        borderRadius: '8px',
        color: '#1976d2',
        textTransform: 'uppercase',
        boxShadow: 24,
        textAlign: 'center',
        p: 4,
    }

    return (
        <>
            <List sx={{ marginTop: '2rem', marginBottom: '3rem' }}>
                { 
                    result.map(player => 
                        <ListItem key={ player.killer } data-testid="result-listItem">
                            <ListItemButton>
                                <Button variant="outlined" size="small" data-testid="open-modal-button" onClick={() => handleOpenModal(player.target)}>Show target</Button>
                                <ListItemText sx={{ marginLeft: '1rem' }} primary={ player.killer } />
                            </ListItemButton>
                        </ListItem>
                    )
                }
            </List>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>
                    {
                        modalText && 
                        <Typography id="modal-modal-title" variant="h6" component="h2">Your target is { modalText }</Typography>
                    }
                </Box>
            </Modal>
            <Button variant="contained" data-testid="reset-result-button" onClick={() => setResult(null)}>Reset result</Button>
        </>
    )
}
export default Result
