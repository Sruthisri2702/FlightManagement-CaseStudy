import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { PnrService } from '../services/pnr.service';

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {
  pnrDetails ! :any;
  constructor(private pnr : PnrService,private formbuilder : FormBuilder) { }

  searchByPNR : FormGroup = this.formbuilder.group({
    pnr : new FormControl('',[
      Validators.required
    ])
  })

  ngOnInit(): void {
  }
  SearchByPnr(){

    this.pnr.searchByPnr(this.searchByPNR.value.pnr).subscribe(
      data => {
        this.pnrDetails = data; 
        console.log('>>',this.pnrDetails)
    });

  }

}
