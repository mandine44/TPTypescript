import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'process';
import { Collegue } from './collegues';
import { Service } from './service';
import { VoteDto } from './VoteDto';
//import { Collegue } from './collegues';

const rl = readline.createInterface({ input, output });

export class Presentation {
    service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    demarrer() {
        console.log('** Administration Collegues **');
        console.log("1. Lister les collègues");
        console.log("2. Creer un collegue");
        console.log("3. Creer un vote");
        console.log("99. Sortir");

        rl.question('Que souhaitez-vous faire ? ', (answer) => {

            switch (answer) {
                case "1":
                    console.log(`>> Liste des collègues`);
                    // 1
                    this.service.getCollegues()
                        .then(tab => {
                            // 3
                            for (const col of tab) {
                                console.log(col.nom, col.prenom);
                            }
                            this.demarrer();
                        })
                        .catch(err => {
                            console.log('Ooppps', err);
                        });
                    break;

                case "2":
                    const unNouveauCollegue = new Collegue("Dudu", "Dupont", "Martin", "uneBellePhoto", 100);
                    this.service.postCollegues(unNouveauCollegue)
                        .catch(err => {
                            console.log('Ooppps', err);
                        });
                    this.demarrer(); //a mettre dans le fecth

                    break;

                case "3":
                    const unNouveauVote = new VoteDto("AIMER", "Dudu");
                    this.service.postVote(unNouveauVote).catch(err => {
                        console.log('Ooppps', err);
                    });
                    this.demarrer(); //a mettre dans le fecth
                    break;

                case "99":
                    console.log(`Au revoir`);
                    rl.close();
                    break;

                default:
                    console.log("Votre choix n'existe pas !");
                    this.demarrer();
                    break;
            }

        });

    }

}



