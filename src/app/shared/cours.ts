import { Lessons } from './lessons';
import { Language } from './language';



export class Cours {
    id?:string;
    name:string;
    Description:string;
    lessons:Lessons[];
    language:Language[];
    
}
