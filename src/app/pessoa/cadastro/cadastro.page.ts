import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  ionicForm: FormGroup;

  constructor(private navCtrl: NavController, public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      nome:[''],
      telefone:[''],
      email:['']
    })
  }

  goTo(page){
    this.navCtrl.navigateForward(page);
  }

  onSubmit(){
    console.log(this.ionicForm.value['nome'])
  }

  ngOnInit() {
  }

}
