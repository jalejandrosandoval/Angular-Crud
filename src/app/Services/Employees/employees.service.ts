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

  // Method for get the employees from Firebase DB
  private getEmployees(): void {
    this.employees$ = this.employeesCollection.snapshotChanges().pipe(
      map(actions => actions.map(elem => { return { Id: elem.payload.doc.id, ...elem.payload.doc.data() } as IEmployee }))
    )
  }

  // Method for add the new employee or edit employee in Firebase DB
  public add_editEmployees(_employee: IEmployee): Promise<void>{
    return new Promise(
      async (resolve, reject) =>{
        try{
          let _res: any;
          if(_employee.Id == null){
            _employee.Id = this._firestore.createId();
            _res = await this.employeesCollection.doc(_employee.Id).set(_employee);
          }else{
            console.log("ID Employee" + _employee.Id);
            console.log(_employee);
            _res = this.employeesCollection.doc(_employee.Id).update(_employee);
          }
          resolve(_res);
        }catch(error: any){
          reject(error.message);
        }
      }
    )
  }

  // Method for delete employees in firebase DB
  public deleteEmployees(employeeId: string): Promise<void> {
    return new Promise(
      async (resolve, reject) =>{
        try{
          let _res = await this.employeesCollection.doc(employeeId).delete();
          resolve(_res);
        }catch(error: any){
          reject(error.message);
        }
      }
    )
  }
}
