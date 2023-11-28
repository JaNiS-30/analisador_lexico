import { useState } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

interface ItemListProps {
  tokens: string[];
  setTokens: (tokens: string[]) => void;
}
const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 360,
  },
});
function ItemList({ tokens, setTokens }: ItemListProps) {
  const [text, setText] = useState('');
  const classes = useStyles();

  const handleAdd = () => {
    if (!tokens.includes(text) && text !== '') {
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
    <div style={{ padding: '16px' }}>
      <Typography style={{ fontSize: 20, padding: '10px' }}>
        Insira os Tokens
      </Typography>
      <TextField
        style={{ marginLeft: '10px' }}
        label="Token"
        value={text}
        onChange={(e) => {
          const value = e.target.value;
          const cleanedValue = value.replace(/[^a-z]/gi, '').toLowerCase();
          setText(cleanedValue);
        }}
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Adicionar
      </Button>
      <List className={classes.root}>
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
