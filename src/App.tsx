import React, { useState } from 'react';
import ItemList from './components/itemList';
import { Box } from '@mui/material';
import { Paper } from '@material-ui/core';
import { createTable } from './scripts/createTable';
import BasicTable from './components/basicTable';
import TestWord from './components/testWord';

function App() {
  const [tokens, setTokens] = useState<string[]>([]);
  const [word, setWord] = useState<string>('');

  let table = createTable(tokens);

  return (
    <>
      <Box sx={{ p: 2, width: '300px' }}>
        <Paper>
          <ItemList tokens={tokens} setTokens={setTokens} />
        </Paper>
      </Box>
      <Box sx={{ p: 2 }}>
        <Paper>
          <TestWord word={word} setWord={setWord} />
        </Paper>
      </Box>
      <Box sx={{ p: 2 }}>
        <Paper>
          <BasicTable table={table} testWord={word}/>
        </Paper>
      </Box>
    </>
  );
}

export default App;
