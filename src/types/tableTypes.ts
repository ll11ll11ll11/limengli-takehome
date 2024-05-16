export interface TableRow {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number,
}

export interface ProductData {
    id: string,
    title: string,
    image: string,
    subtitle: string,
    tags: string[],
    sales: TableRow[]
}