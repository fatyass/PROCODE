import { Cours } from './cours';
import { Library } from './library';

export class Language {
    id?:string;
    name:string;
    Description:string;
    cours:Cours[];
    library:Library[];
    
}
