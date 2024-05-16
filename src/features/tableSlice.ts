import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductData} from '../types/tableTypes';
import { initialTableData } from '../dataJson';

interface TableState {
    productData: ProductData;
    sortColumn?: string | null;
    sortDirection?: 'asc' | 'desc'|null;
    filter?: string;
}

const initialState: TableState = {
    productData: {
        id: initialTableData.id,
        title: initialTableData.title,
        image: initialTableData.image,
        subtitle: initialTableData.subtitle,
        tags: initialTableData.tags,
        sales: initialTableData.sales
    },
    sortColumn: null,
    sortDirection: null,
    filter: ""
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        sortData: (state, action: PayloadAction<{ columnName: string }>) => {
            state.sortColumn = action.payload.columnName;
            state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc'; 
            state.productData.sales.sort((a, b) => {
                    if (action.payload.columnName !== 'weekEnding') {
                        const numA = Number(a[action.payload.columnName as keyof typeof a]);
                        const numB = Number(b[action.payload.columnName as keyof typeof b]);
                        const diff = numA - numB;
                        return state.sortDirection === 'asc' ? diff : -diff;
                    } else {
                        const dateA = new Date(a[action.payload.columnName]);
                        const dateB = new Date(b[action.payload.columnName]);
                        const diff = dateA.getTime() - dateB.getTime();
                        return state.sortDirection === 'asc' ? diff : -diff;
                    }
            });
        },
        filterData: (state, action: PayloadAction<{inputValue: string}>) => {
            state.filter = action.payload.inputValue;
            state.productData.sales = initialTableData.sales.filter((row) => {
                let isMatch = false;
                for (const key in row) {
                    const cur = row[key as keyof typeof row]+"";
                    if(cur.includes(action.payload.inputValue)){
                        isMatch = true;
                        break;
                    }
                }
                return isMatch;
            });
        }
    }
});

export const { sortData, filterData} = tableSlice.actions;
export default tableSlice.reducer;
