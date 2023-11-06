import { useState } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

interface ItemListProps {
  tokens: string[];
  setTokens: (tokens: string[]) => void;
}

function ItemList({ tokens, setTokens }: ItemListProps) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!tokens.includes(text)) {
      const newItem: string = text;
      setTokens([...tokens, newItem]);
      setText('');
    }
  };

  const handleDelete = (id: string) => {
    const updatedItems = tokens.filter((token) => token !== id);
    setTokens(updatedItems);
  };

  return (
    <div>
      <TextField
        label="Add item"
        value={text}
        onChange={(e) => {
          const value = e.target.value;
          const cleanedValue = value.replace(/[^a-z]/gi, '').toLowerCase();
          setText(cleanedValue);
        }}
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
      <List>
        {tokens.map((token) => (
          <ListItem key={token}>
            <ListItemText primary={token} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(token)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ItemList;
