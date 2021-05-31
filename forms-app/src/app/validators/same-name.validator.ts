import { AbstractControl, ValidatorFn } from "@angular/forms";

export function sameNameValidator(controlNames: string[]): ValidatorFn {
    return (group: AbstractControl): {[key: string]: boolean} | null => {
        let allValues = controlNames.map(name => group.get(name)?.value);
        let validated = allValues.every(val => val === allValues[0]);
        return validated ? null : {mismatch: true};
    }
}