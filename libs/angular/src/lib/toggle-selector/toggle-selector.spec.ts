import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, DebugElement, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { By } from "@angular/platform-browser";
import { IToggleSelector } from "@sebgroup/extract";

import { NggToggleSelectorComponent } from "./toggle-selector.component"

@Component({
    selector: "ngg-toggle-selector-test",
    template: `<ngg-toggle-selector
        #toggleSelector
        [multi]="multi"
        [list]="list"
        [(ngModel)]="model"
        [disabled]="disabled"
        [errorMessage]="errorMessage"
    ></ngg-toggle-selector>`,
})
class NggToggleSelectorTestComponent {
    @ViewChild("toggleSelector") toggleSelector: NggToggleSelectorComponent | undefined = undefined;

    list: Array<IToggleSelector>;
    multi = false;
    disabled?: boolean = false;
    model?: any;
    errorMessage?: string;

    constructor() {
        this.list = [
            { value: "1", label: "Four mississipi", disabled: true },
            { value: "2", label: "Five mississipi", description: "Description" },
        ];
    }
}

describe("ToggleSelectorComponent", () => {
    let component: NggToggleSelectorTestComponent;
    let fixture: ComponentFixture<NggToggleSelectorTestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, CommonModule],
            declarations: [NggToggleSelectorComponent, NggToggleSelectorTestComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NggToggleSelectorTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("Should disable the element when disabled prop is set to true", () => {
        component.disabled = true;
        fixture.detectChanges();
        const container: DebugElement = fixture.debugElement.query(By.css(".disabled"));
        const elements: DebugElement[] = fixture.debugElement.queryAll(By.css(".toggle-selector input:disabled"));
        const descriptions: DebugElement[] = fixture.debugElement.queryAll(By.css(".text-disabled"));
        expect(container).toBeDefined();
        expect(container).not.toBeNull();
        expect(elements).toBeDefined();
        expect(elements).toBeTruthy();
        expect(elements.length).toBe(component.list.length);
        expect(descriptions.length).toBeGreaterThan
    });

    it("Should disable one element when disabled prop is set to true", () => {
        const inputEl: DebugElement[] = fixture.debugElement.queryAll(By.css("input"));
        expect(inputEl.some(el => el.nativeElement.disabled === true)).toBeTruthy();
        expect(inputEl.every(el => el.nativeElement.disabled === true)).toBeFalsy();
    });

    it("should have error class name and text when error message is passed", () => {
        component.errorMessage = "Error message";
        fixture.detectChanges();
        const container: DebugElement = fixture.debugElement.query(By.css(".error"));
        const span: DebugElement = fixture.debugElement.query(By.css(".text-danger"));
        expect(container).toBeDefined();
        expect(container).not.toBeNull();
        expect(span).toBeDefined();
        expect(span).not.toBeNull();
    });

    describe("Things that should happen when multi is true", () => {
        beforeEach(() => {
            component.multi = true;
            component.list = [
                { value: "1", label: "Four mississipi" },
                { value: "2", label: "Five mississipi" },
            ];
            fixture.detectChanges();
        });

        it("Should have type checkbox when multi is true", () => {
            const elements: DebugElement[] = fixture.debugElement.queryAll(By.css(".toggle-selector input[type=checkbox]"));
            expect(elements.length).toBe(component.list.length);
        });

        it("Should have two checked when both options are clicked", () => {
            const element: HTMLElement[] = fixture.nativeElement.querySelectorAll(".toggle-selector");
            element[1].dispatchEvent(new Event("click"));
            fixture.detectChanges();
            const inputEl: DebugElement[] = fixture.debugElement.queryAll(By.css("input"));
            expect(inputEl.every(el => el.nativeElement.checked === true)).toBeFalsy();

            element[0].dispatchEvent(new Event("click"));
            fixture.detectChanges();
            expect(inputEl.every(el => el.nativeElement.checked)).toBeTruthy();
        });

        it("should uncheck when previously checked option is clicked", () => {
            const element: HTMLElement[] = fixture.nativeElement.querySelectorAll(".toggle-selector");
            element[1].dispatchEvent(new Event("click"));
            fixture.detectChanges();
            const inputEl: DebugElement[] = fixture.debugElement.queryAll(By.css("input"));

            expect(inputEl.every(el => el.nativeElement.checked)).toBeFalsy();

            element[1].dispatchEvent(new Event("click"));
            fixture.detectChanges();
            expect(inputEl.some(el => el.nativeElement.checked)).toBeFalsy();
        });
    });

    describe("Things that should happen when multi is false", () => {
        beforeEach(() => {
            component.multi = false;
            component.list = [
                { value: "1", label: "Four mississipi" },
                { value: "2", label: "Five mississipi" },
            ];
            fixture.detectChanges();
        });

        it("Should have type radio when multi is false", () => {
            const elements: DebugElement[] = fixture.debugElement.queryAll(By.css(".toggle-selector input[type=radio]"));
            expect(elements.length).toBe(component.list.length);
        });

        it("should not have anything checked", () => {
            const inputEl: DebugElement[] = fixture.debugElement.queryAll(By.css("input"));
            expect(inputEl.every(el => el.nativeElement.checked)).toBeFalsy();
        });

        it("Should have only one checked when an option is clicked and move to another option if it's clicked", () => {
            const element: HTMLElement[] = fixture.nativeElement.querySelectorAll(".toggle-selector");
            element[1].dispatchEvent(new Event("click"));
            fixture.detectChanges();
            const inputEl: DebugElement[] = fixture.debugElement.queryAll(By.css("input"));
            expect(inputEl.every(el => el.nativeElement.checked)).toBeFalsy();
            expect(inputEl[1].nativeElement.checked).toBeTruthy();

            element[0].dispatchEvent(new Event("click"));
            fixture.detectChanges();
            expect(inputEl.every(el => el.nativeElement.checked)).toBeFalsy();
            expect(inputEl[0].nativeElement.checked).toBeTruthy();
        });
    });
});
