import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'

const PlayersList = ({ players, deletePlayer }) => (
    <List sx={{ marginTop: '2rem', marginBottom: '3rem' }}>
        { 
        players.map(player => 
            <ListItem key={ player }>
                <ListItemButton>
                    <Button variant="outlined" size="small" onClick={ () => deletePlayer(player) }>Delete</Button>
                    <ListItemText sx={{ marginLeft: '1rem' }} primary={ player } />
                </ListItemButton>
            </ListItem>
        )
        }
    </List>
)

export default PlayersList
