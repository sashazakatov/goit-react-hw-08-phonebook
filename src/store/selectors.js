import { createSelector } from "@reduxjs/toolkit";
import { selectItems } from './contact/selectors'
import { selectFilter } from "./filter/selectors";

export const selectFiltedItems = createSelector([selectItems, selectFilter], (items, filter) => 
    items.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
)