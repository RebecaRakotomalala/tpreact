import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPrixProduits = createAsyncThunk(
    'prix/fetchPrixProduits',
    async ({ idProduit, dateDebut, dateFin }) => {
      const url = new URL('http://localhost:8000/api/hausses');
      if (idProduit) url.searchParams.append('id_produit', idProduit);
      url.searchParams.append('start_date', dateDebut);
      url.searchParams.append('end_date', dateFin);
  
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des prix');
      }
      const data = await response.json();
      return data;
    }
  );  

const prixSlice = createSlice({
  name: 'prix',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrixProduits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPrixProduits.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPrixProduits.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default prixSlice.reducer;
