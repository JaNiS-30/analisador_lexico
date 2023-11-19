import { ChangeEvent } from 'react';
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

interface BasicWordProps {
  word: string;
  setWord: (word: string) => void;
  list: ListTestWords[];
  setList: (list: ListTestWords[]) => void;
}

interface ListTestWords {
  word: string;
  success: boolean;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 360,
  },
});

export default function TestWord({
  word,
  setWord,
  list,
  setList,
}: BasicWordProps) {
  const classes = useStyles();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const cleanedValue = value
      .replace(/[^a-z ]/gi, '')
      .replace(/\s{2,}/g, ' ')
      .toLowerCase();
    setWord(cleanedValue);
  };

  const handleDelete = (index: string) => {
    const updatedItems = list.filter((item) => item.word !== index);
    setList(updatedItems);
  };

  return (
    <div style={{ padding: '16px' }}>
      <TextField
        label="Palavra"
        type="text"
        value={word}
        onChange={handleChange}
      />
      <List className={classes.root}>
        {list.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={item.word}
              style={{ color: item.success ? 'green' : 'red' }}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(item.word)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
