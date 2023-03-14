import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private router: Router) { 
  }

  ngOnInit(): void {
  }
  
  public getNavigateNextpage(){
    this.router.navigate(['/login']);
  }


}
