import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboaard',
  templateUrl: './dashboaard.component.html',
  styleUrls: ['./dashboaard.component.css']
})
export class DashboaardComponent {


  acno=''
  psw=''
  amnt=''

  accno=''
  pswd=''
  amntt=''

  user=''

constructor(private ds:DataService){

  //access username
  this.user=this.ds.currentuser

}

  deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt

    const result=this.ds.deposit(acno,psw,amnt)

    if(result)
    {
      alert(`${amnt} credited to your account and available balance is ${result}`)
    }
    else{
      alert('incorrect account number or password')
    }
  }

  withdraw(){
    var accno=this.accno
    var pswd=this.pswd
    var amntt=this.amntt

    const result=this.ds.withdraw(accno,pswd,amntt)

    if(result)
    {
      alert(`${amntt} debited from your account and available balance is ${result}`)
    }
    // else{
    //   alert('incorrect account number or password')
    // }
  }

  }


