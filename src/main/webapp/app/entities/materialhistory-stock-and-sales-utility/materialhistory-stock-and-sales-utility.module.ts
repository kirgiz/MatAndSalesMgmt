import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialAndStockManagementSharedModule } from '../../shared';
import {
    MaterialhistoryStockAndSalesUtilityService,
    MaterialhistoryStockAndSalesUtilityPopupService,
    MaterialhistoryStockAndSalesUtilityComponent,
    MaterialhistoryStockAndSalesUtilityDetailComponent,
    MaterialhistoryStockAndSalesUtilityDialogComponent,
    MaterialhistoryStockAndSalesUtilityPopupComponent,
    MaterialhistoryStockAndSalesUtilityDeletePopupComponent,
    MaterialhistoryStockAndSalesUtilityDeleteDialogComponent,
    materialhistoryRoute,
    materialhistoryPopupRoute,
    MaterialhistoryStockAndSalesUtilityResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...materialhistoryRoute,
    ...materialhistoryPopupRoute,
];

@NgModule({
    imports: [
        MaterialAndStockManagementSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        MaterialhistoryStockAndSalesUtilityComponent,
        MaterialhistoryStockAndSalesUtilityDetailComponent,
        MaterialhistoryStockAndSalesUtilityDialogComponent,
        MaterialhistoryStockAndSalesUtilityDeleteDialogComponent,
        MaterialhistoryStockAndSalesUtilityPopupComponent,
        MaterialhistoryStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        MaterialhistoryStockAndSalesUtilityComponent,
        MaterialhistoryStockAndSalesUtilityDialogComponent,
        MaterialhistoryStockAndSalesUtilityPopupComponent,
        MaterialhistoryStockAndSalesUtilityDeleteDialogComponent,
        MaterialhistoryStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        MaterialhistoryStockAndSalesUtilityService,
        MaterialhistoryStockAndSalesUtilityPopupService,
        MaterialhistoryStockAndSalesUtilityResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialAndStockManagementMaterialhistoryStockAndSalesUtilityModule {}
