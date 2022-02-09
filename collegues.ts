export class Collegue {
   pseudo:String;
    nom: String;
    prenom: String;
    photo: String;
    score : number;

    constructor(pseudo:String,nom: String,prenom:String, photo: String, score:number){
        this.nom =nom;
        this.prenom=prenom;
        this.pseudo=pseudo;
        this.photo=photo;
        this.score =score;
    }

}
