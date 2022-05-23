import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static passwordNotMatched(
    control: AbstractControl
  ): { [s: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordNotMatched: true };
    }
    return null;
  }
}
