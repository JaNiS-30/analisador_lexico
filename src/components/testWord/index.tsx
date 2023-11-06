import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

interface BasicWordProps {
    word: string;
    setWord: (word: string) => void;
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 360,
    },
});

export default function TestWord({ word, setWord }: BasicWordProps) {
    const [list, setList] = useState<string[]>([]);
    const classes = useStyles();

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === ' ') {
            event.preventDefault();
            setList((prevList) => [...prevList, word]);
            setWord('');
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    };

    const handleDelete = (index: number) => {
        setList((prevList) => prevList.filter((item, i) => i !== index));
    };

    return (
        <div>
            <TextField
                type="text"
                value={word}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
            />
            <List className={classes.root}>
                {list.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={item} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}