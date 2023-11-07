import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
login=new FormControl('',[Validators.required,Validators.email]);
pwd=new FormControl('');
showLogin(){
  console.log(this.login.valid);
}

fg=new FormGroup(
  {
    loginfg:new FormControl('',[Validators.required,Validators.minLength(4)]),
    pwdfg:new FormControl('')
  
  }
)
showFg(){
  console.log(this.fg.controls['loginfg'])
}
get loginfg(){
  return this.fg.controls['loginfg'];
}
get password(){
 return this.fg.get('pwdfg');
}
constructor(private fb:FormBuilder){

}
frombuil=this.fb.group({
  loginfb:['',[Validators.required]],
  pwdfb:['pwd'],
  skills:this.fb.array(
    [
      new FormControl('Angular'),
      new FormControl('React')
    ]
  )
})
get skills(){
return this.frombuil.get('skills') as FormArray
}
addElementToSkills(){
  this.skills.push(new FormControl(''))
}
RemoveElementFromSkills(index:any){
this.skills.removeAt(index);
}
}
