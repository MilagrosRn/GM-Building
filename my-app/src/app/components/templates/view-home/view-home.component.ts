import { Component, OnInit } from '@angular/core';
import { CAROUSEL_ITEMS } from 'src/app/models/constants/carousel.const';
import { CarouselItem} from '../../../models/interfaces/carousel-item'

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent implements OnInit {

  public items: CarouselItem[] = CAROUSEL_ITEMS
  public currentPosition = 0;
  
  constructor() { 
  }

  ngOnInit(): void {
    this.itemsCarouselVerifyData();
    setTimeout(() => {this.setNext()}, 1500);
  }

  itemsCarouselVerifyData(){
    this.items.map((element,index)=>{
      element.id = index;
      element.marginLeft = 0;
    })
  }

  findCarouselItem():CarouselItem{
    let findPositionByItem : CarouselItem | any = this.items.find((element:CarouselItem) => element.id === 0)
    return findPositionByItem
  }
  setCarouselCurrentPosition(position:number){
    this.currentPosition=position;
    
    if(this.findCarouselItem()){
      this.findCarouselItem().marginLeft = -100 * position;
    }
  }

  setNext() {
    
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if(nextPosition <= this.items.length - 1){
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition=0;
    }
   
    if(this.findCarouselItem()){
      this.findCarouselItem().marginLeft = finalPercentage;
      this.currentPosition = nextPosition;
    }
    
  }

  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition -1 ;
    if(backPosition>=0){
      finalPercentage = -100* backPosition;
    }else{
      backPosition=this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }

    if(this.findCarouselItem()){
      this.findCarouselItem().marginLeft = backPosition;
      this.currentPosition = backPosition;
    }
  }
}
