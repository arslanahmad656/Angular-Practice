import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export function formGroupRequiredValidator(requiredControls: string[]): ValidatorFn {
    return (group: AbstractControl): {groupRequired: boolean, fields: string[]} | null => {
        if (!(group instanceof FormGroup)) {
            throw new TypeError(`${formGroupRequiredValidator.name} can only be applied on a ${FormGroup.name} and not on ${group?.constructor?.name}`);
        }

        let missingControls: string[] = [];
        requiredControls.forEach(control => {
            let value = group.get(control)?.value;
            if (value === null || value === undefined || value === '' ) {
                missingControls.push(control);
            }
        });

        let validated = missingControls.length === 0;
        return validated ? null : {groupRequired: true, fields: missingControls};
    }
}