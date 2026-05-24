import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  NativeDateAdapter
} from '@angular/material/core';

import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Validators } from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { CreatePersonRequest } from '../../models/person.model';

@Injectable()
class DdMmYyyyDateAdapter extends NativeDateAdapter {
  override format(date: Date, _displayFormat: object): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

const DD_MM_YYYY_FORMATS = {
  parse: { dateInput: 'DD/MM/YYYY' },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
};

@Component({
  selector: 'app-person-dialog',
  standalone: true,
  providers: [
    { provide: DateAdapter, useClass: DdMmYyyyDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_FORMATS },
  ],
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './person-dialog.component.html',
})
export class PersonDialogComponent implements OnInit {

  form!: FormGroup;
  maxDate = new Date();
  isDisabled = true;
  isSaving = false;
  isViewMode = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PersonDialogComponent>,
    private personService: PersonService,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) { }

  public ngOnInit(): void {

    this.isViewMode = this.data.mode === 'view';

    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(200)]],
      lastName: ['', [Validators.required, Validators.maxLength(200)]],
      birthDate: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.maxLength(2000)]]
    });

    if (this.data.person) {
      this.form.patchValue(this.data.person);
    }

    if (this.isViewMode) {
      this.form.disable();
    }
  }

  public save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSaving = true;

    const payload: CreatePersonRequest = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      birthDate: this.form.value.birthDate,
      address: this.form.value.address
    };

    this.personService.createPerson(payload).subscribe({
      next: (res) => {
        this.isSaving = false;

        this.dialogRef.close({
          saved: true,
          data: res
        });
      },
      error: (err) => {
        this.isSaving = false;
        console.error('Create person failed', err);
      }
    });
  }

  public close() {
    this.dialogRef.close();
  }

  get age(): number | null {

    const birthDate = this.form.get('birthDate')?.value;

    if (!birthDate) {
      return null;
    }

    const today = new Date();

    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  }
}
