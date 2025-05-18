import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
export type ValidatorEntry = SyncValidatorEntry | AsyncValidatorEntry;
export interface SyncValidatorEntry extends ValidatorEntryBase {
    async: false;
    validator?: (...x: any[]) => ValidatorFn;
}
export interface AsyncValidatorEntry extends ValidatorEntryBase {
    async: true;
    validator: (...x: any[]) => AsyncValidatorFn;
}
type ValidatorEntryBase = {
    key: string;
    message: string;
    validatorArgs: unknown[];
};
export {};
