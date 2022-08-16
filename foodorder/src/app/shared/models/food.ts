export class Foods{
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean = false;
    stars:number = 0;
    imgUrl!:string;
    tags?:string[];
    cookTime!:string;
    origins!:string[]; 
}