import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
    async ( _, thunkAPI) => {
        try{
            const { data } = await axios.get('/contacts');
            return data;
        } catch (e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const addContact = createAsyncThunk('contacts/addContact', async ( {name, number}, thunkAPI) => {
    try{
        const respons = await axios.post('/contacts',{
            name,
            number,
        })
        return respons.data;
    }catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
})
export const deleteContact = createAsyncThunk('contacts/deleteContact', async ( id, thunkAPI ) => {
    try{
        const respons = await axios.delete(`/contacts/${id}`);
        return respons.data;
    }catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
})