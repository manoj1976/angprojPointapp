import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import * as FileSaver from 'file-saver';



@Component({
  selector: 'app-dwnload-navinvoice',
  templateUrl: './dwnload-navinvoice.component.html',
  styleUrls: ['./dwnload-navinvoice.component.css']
})
export class DwnloadNAVInvoiceComponent implements OnInit {

  constructor(
    private datasvc:DataService
  ) { }

  ngOnInit() {
  }

  btnDwnload(){
    this.datasvc.downloadNAVInvoice('test.pdf')
        .subscribe((data:any) => {
            let blob = new Blob([data], { 
            type: 'application/pdf' // must match the Accept type
         });

         let x=data.headers['Filename'];


         let filename = 'mypdf.pdf';
          FileSaver.saveAs(blob, filename);
        }
        );
          
  }
}
