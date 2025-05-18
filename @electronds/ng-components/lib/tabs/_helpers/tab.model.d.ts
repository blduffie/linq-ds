import { Type } from '@angular/core';
export interface Tab {
    label: string;
    svg: string;
    component: Type<unknown>;
}
