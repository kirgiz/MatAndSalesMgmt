/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { MaterialAndStockManagementTestModule } from '../../../test.module';
import { CountryStockAndSalesUtilityDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/country-stock-and-sales-utility/country-stock-and-sales-utility-delete-dialog.component';
import { CountryStockAndSalesUtilityService } from '../../../../../../main/webapp/app/entities/country-stock-and-sales-utility/country-stock-and-sales-utility.service';

describe('Component Tests', () => {

    describe('CountryStockAndSalesUtility Management Delete Component', () => {
        let comp: CountryStockAndSalesUtilityDeleteDialogComponent;
        let fixture: ComponentFixture<CountryStockAndSalesUtilityDeleteDialogComponent>;
        let service: CountryStockAndSalesUtilityService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [MaterialAndStockManagementTestModule],
                declarations: [CountryStockAndSalesUtilityDeleteDialogComponent],
                providers: [
                    CountryStockAndSalesUtilityService
                ]
            })
            .overrideTemplate(CountryStockAndSalesUtilityDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CountryStockAndSalesUtilityDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CountryStockAndSalesUtilityService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
