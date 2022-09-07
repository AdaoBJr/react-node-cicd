import React, { useCallback, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';

export const App: React.FC = () => {
  const [res, setRes] = useState<AxiosResponse>();

  const getResponse = useCallback(async () => setRes(await axios.get('/example')), []);

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <Box sx={{ display: 'grid', placeItems: 'center', mt: '1rem' }}>
      <Typography variant="h5" fontWeight={600}>
        Rodando a aplicação React...🔥
      </Typography>
      {res && (
        <Typography variant="h6" fontWeight={500}>
          {res.data}
        </Typography>
      )}
    </Box>
  );
};
