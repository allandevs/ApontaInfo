import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SuporteService {

  constructor(private snackBar: MatSnackBar) { }


  showMessage(msg: string, isError: boolean = false){
    this.snackBar.open(msg,'x',{
      duration:3000,
      horizontalPosition:"center",
      verticalPosition:"top",
      // panelClass: isError ?  ['msg-error'] : ['msg-sucess'],
      panelClass: ['snackbar']
    })
  }
  showMessageErro(msg: string, isError: boolean = false){
    this.snackBar.open(msg,'x',{
      duration:3000,
      horizontalPosition:"center",
      verticalPosition:"top",
      // panelClass: isError ?  ['msg-error'] : ['msg-sucess'],
      panelClass: ['snackbarRed']
    })
  }
}
