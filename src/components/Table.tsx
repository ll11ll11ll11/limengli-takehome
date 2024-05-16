import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { filterData, sortData} from '../features/tableSlice';
import { TableRow } from '../types/tableTypes';
import './Table.css';

const Table: React.FC = () => {
    const {productData, sortColumn, sortDirection, filter} = useSelector((state: RootState) => state.table);
    const dispatch: AppDispatch = useDispatch();

    const  handleFilter= (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterData({inputValue: ""+e.target.value}));
    };
    const handleSort = (columnName: string) => {
        dispatch(sortData({columnName}));
    };
    const getColumnHeaderClassName = (columnName: string) => {
        if (columnName === sortColumn) {
          return sortDirection === 'asc' ? 'asc' : 'desc';
        }
        return '';
      };
    const getColumnHeader = (columnName: string, displayName: string) => {
        return (
          <th className={getColumnHeaderClassName(columnName)} onClick={() => handleSort(columnName)}>
            {displayName} 
          </th>
        );
      };
    
    return (
    <div>
        <input
            type="text"
            placeholder="Type to filter across all columns..."
            value={filter}
            onChange={handleFilter}
        />
        <table className='table-pretty'>
            <thead>
                <tr>
                    {getColumnHeader('weekEnding', 'Week Ending')}
                    {getColumnHeader('retailSales', 'Retail Sales')}
                    {getColumnHeader('wholesaleSales', 'Wholesale Sales')}
                    {getColumnHeader('unitsSold', 'Units Sold')}
                    {getColumnHeader('retailerMargin', 'Retailer Margin')}
                </tr>
            </thead>
            <tbody>
                {productData.sales.map((row: TableRow) => (
                    <tr key={row.weekEnding}>
                        <td>{row.weekEnding}</td>
                        <td>{row.retailSales}</td>
                        <td>{row.wholesaleSales}</td>
                        <td>{row.unitsSold}</td>
                        <td>{row.retailerMargin}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div> 
    )};
export default Table;