import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { switchMap, tap, take } from 'rxjs/operators';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm!: FormGroup;

  get email() {
    return this.myForm.get('email');
  }

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [], this.checkEmail],
    });
  }

  onSubmit() {
    // this.dataService.checkEmail(this.myForm.value).subscribe((data) => {
    //   console.log(data);
    // });
    // // console.log(this.myForm.value);
  }

  checkEmail = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const val = control.value;
    const emailobj = { email: val };

    return timer(1000).pipe(
      switchMap((_) => {
        return this.dataService.checkEmail(emailobj);
      }),
      tap(console.log),
      switchMap((data) => {
        if (data) {
          return of({ hasemail: true });
        } else {
          return of(null);
        }
      }),
      take(1)
    );
  };
}

// interface AsyncValidatorFn {
//   (control: AbstractControl): Observable<ValidationErrors | null>
// }
