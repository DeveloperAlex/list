// ag-grid-enterprise v7.2.4
import { Column } from "ag-grid/main";
import { AbstractColumnDropPanel } from "./abstractColumnDropPanel";
export declare class ValuesColumnPanel extends AbstractColumnDropPanel {
    private columnController;
    private eventService;
    private gridOptionsWrapper;
    private context;
    private loggerFactory;
    private dragAndDropService;
    constructor(horizontal: boolean);
    private passBeansUp();
    protected getIconName(): string;
    protected isColumnDroppable(column: Column): boolean;
    protected updateColumns(columns: Column[]): void;
    protected getExistingColumns(): Column[];
}