import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urna-eletronica';

  valueInput1 = ''
  valueInput2 = ''
  showDiv1 = false;
  showDiv2 = false;
  votoNulo = false;
  votoBranco = false;
  confirmaVoto = false;

  getValue(value1: string) {
    //console.log(valua1)
    // verificar se o input 1 já tem valor, se tiver, preencher o valor no input2, senáo, preencher o valor no input1
    if (this.valueInput1 === '') {
      this.valueInput1 = value1;
    } else {
      this.valueInput2 = value1
    }
    this.showImg(this.valueInput1, this.valueInput2)
  }

  private showImg(value1: string, value2: string) {
    const result = value1 + value2
    if (result === '13') {
      this.showDiv2 = false;
      this.showDiv1 = true;
      return
    } else if (result === '22') {
      this.showDiv1 = false;
      this.showDiv2 = true;
      return
    } else if (value2 !== '') {
      this.votoNulo = true;
    } else {
      return
    }

  }
  reviewVote() {
    this.valueInput1 = '';
    this.valueInput2 = '';
    this.showDiv1 = false;
    this.showDiv2 = false;
    this.votoNulo = false;
    this.votoBranco = false;
    this.confirmaVoto = false;
  }
  confirmVoto() {
    if(this.votoBranco === true){
      console.log("Confirmando voto Branco")
      this.confirmaVoto = true;
      this.votoNulo = false;
      this.votoBranco = false;


    } else if (this.votoNulo === true) {
      console.log("Confirmando voto Nulo")
      this.confirmaVoto = true;
      this.votoNulo = false;

    } else if ((this.valueInput1 !== "") && (this.valueInput2 !== "")){
      console.log("Confirmando voto")
      this.confirmaVoto = true;

    }
    return
  }

  putWhiteVote = () => this.votoBranco = true;




}
