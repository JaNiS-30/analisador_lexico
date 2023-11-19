import { useState } from 'react';
import ItemList from './components/itemList';
import { Box, Link, Typography } from '@mui/material';
import { AppBar, Paper } from '@material-ui/core';
import { createTable } from './scripts/createTable';
import BasicTable from './components/basicTable';
import TestWord from './components/testWord';

interface ListTestWords {
  word: string;
  success: boolean;
}

function App() {
  const [tokens, setTokens] = useState<string[]>([]);
  const [list, setList] = useState<ListTestWords[]>([]);
  const [word, setWord] = useState<string>('');

  let table = createTable(tokens);

  return (
    <>
      <AppBar position="static">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" component="div">
            Analisador Léxico
          </Typography>
          <Typography variant="body1" component="div">
            por:{' '}
            <Link
              href="https://github.com/JaNiS-30/analisador_lexico"
              color="inherit"
            >
              Giani Pertuzatti
            </Link>
          </Typography>
        </Box>
      </AppBar>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box sx={{ p: 2, flex: 1 }}>
          <Paper>
            <ItemList tokens={tokens} setTokens={setTokens} />
          </Paper>
        </Box>
        <Box sx={{ p: 2, flex: 1 }}>
          <Paper>
            <TestWord
              word={word}
              setWord={setWord}
              list={list}
              setList={setList}
            />
          </Paper>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Paper>
          <BasicTable
            table={table}
            testWord={word}
            list={list}
            setList={setList}
            setWord={setWord}
          />
        </Paper>
      </Box>
    </>
  );
}

export default App;
