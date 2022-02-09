import { Collegue } from "./collegues";

export class VoteDto{
 avis:String;
//uncollegue:Collegue;
//dateDeCreation:Date;
//score:number;
pseudo:Collegue["pseudo"];

constructor(avis:String, pseudo:Collegue["pseudo"]){
    this.avis=avis;
    this.pseudo=pseudo;

}

}