export interface CarouselItem {
    id: number;
    marginLeft?:number;
    title?:{
        first:string;
        second:string;
    }
    subtitle?:string;
    link?:string;
    image:string;
    order?:number;
    
}
