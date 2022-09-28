import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NggModalService implements OnDestroy {
    private locks: HTMLElement[] = [];
    
    constructor (@Inject(DOCUMENT) private document: Document) {}

    public lockBody(htmlElement: HTMLElement) {
        // Check if lock already exists
        if (this.locks.some((l) => l === htmlElement))
            return;

        // If no locks exists, then add class
        if (this.locks.length <= 0) {
            this.document.body.classList.add("ngg-overflow-hidden");
        }
        
        // Add lock
        this.locks.push(htmlElement);
    }

    public releaseBody(htmlElement: HTMLElement) {
        // Check if lock exists
        const index = this.locks.indexOf(htmlElement);
        if (index > -1) {
            // Remove lock
            this.locks.splice(index, 1)
            
            // If no locks remain, then remove class
            if (this.locks.length <= 0) {
                this.document.body.classList.remove("ngg-overflow-hidden");
            }
        }
    }

    public ngOnDestroy(): void {
        this.locks.splice(0);
        this.document.body.classList.remove("ngg-overflow-hidden");
    }
}