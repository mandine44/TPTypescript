// CommonJS
// RequireJS
// en 2015 => ES Modules (mot clé import et export)

import fetch from 'node-fetch';
import { Collegue } from './collegues';
import { VoteDto } from './VoteDto';


export class Service {
    
    async getCollegues() { // Promise<Tableau>
        const response = await fetch(
            'https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
        return await response.json();
    }

    // getColleguesV1() {
    //     return fetch(
    //         'https://formation-angular-collegues.herokuapp.com/api/v1/collegues') // Promise<Response>
    //         .then(resp => resp.json()); // Promise<Tableau>

    // }

    async postCollegues(unNouveauCollegue:Collegue){

        const body = unNouveauCollegue;

        const response = await fetch('https://formation-angular-collegues.herokuapp.com/api/v1/collegues', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
        return await response.json();       

    }

    async postVote(unNouveauVote:VoteDto){
        const body = unNouveauVote;

        const response = await fetch('https://formation-angular-collegues.herokuapp.com/api/v1/collegues', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
        return await response.json();    
    }
   
}
