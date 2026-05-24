import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Person } from "../../models/person.model";
import { PersonService } from "../../services/person.service";
import { PersonListGridComponent } from "../../components/person-list-grid/person-list-grid.component";
import { MatDialog } from "@angular/material/dialog";
import { PersonDialogComponent } from "../../components/person-dialog/person-dialog.component";

@Component({
  selector: 'app-person-list-page',
  standalone: true,
  imports: [
    PersonListGridComponent],
  templateUrl: './person-list.page.html',
})
export class PersonListPage implements OnInit {
  persons: Person[] = [];
  loading = false;

  constructor(private personService: PersonService, private cdr: ChangeDetectorRef, private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.loadPersons();
  }

  public loadPersons(): void {
    this.loading = true;
    this.personService.getAllPerson().subscribe({
      next: (res) => {
        this.persons = res;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }

  public onAddPerson(): void {
    const dialogRef = this.dialog.open(PersonDialogComponent, {
      width: '1000px',
      data: {
        mode: 'add'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.saved) {
        this.loadPersons();
      }
    });
  }

  public openViewPerson(person: Person) {
    this.dialog.open(PersonDialogComponent, {
      width: '1000px',
      data: {
        mode: 'view',
        person: person
      }
    });
  }
}