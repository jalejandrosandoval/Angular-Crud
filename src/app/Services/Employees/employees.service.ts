import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IEmployee } from 'src/app/Interfaces/Employee.interface';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees$: Observable<IEmployee[]> = new Observable();

  private employeesCollection: AngularFirestoreCollection<IEmployee>;

  constructor(private _firestore: AngularFirestore) {
    this.employeesCollection = _firestore.collection<IEmployee>('employees');
    this.getEmployees();
  }

  // Method fot get the employees from Firebase DB
  private getEmployees(): void {
    this.employees$ = this.employeesCollection.snapshotChanges().pipe(
      map(actions => actions.map(elem => elem.payload.doc.data() as IEmployee))
    )
  }
}
