// src/data.json.ts
import data from './stackline_frontend_assessment_data_2021.json';
import {ProductData} from './types/tableTypes';

export const initialTableData: ProductData = data[0] as ProductData;

