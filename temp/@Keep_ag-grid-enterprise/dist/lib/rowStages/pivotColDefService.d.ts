// ag-grid-enterprise v7.2.4
import { ColDef, ColGroupDef } from "ag-grid/main";
export interface PivotColDefServiceResult {
    pivotColumnGroupDefs: (ColDef | ColGroupDef)[];
    pivotColumnDefs: ColDef[];
}
export declare class PivotColDefService {
    private columnController;
    createPivotColumnDefs(uniqueValues: any): PivotColDefServiceResult;
    private recursivelyAddGroup(parentChildren, pivotColumnDefs, index, uniqueValues, pivotKeys, columnIdSequence, levelsDeep, primaryPivotColumns);
    private createColDef(valueColumn, headerName, pivotKeys, columnIdSequence);
    private headerNameComparator(userComparator, a, b);
}
