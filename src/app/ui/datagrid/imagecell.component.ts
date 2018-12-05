import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular/main';

@Component({
    selector: 'image-cell',
    template: `
        <img style="height:22px; width:22px; border-radius:50%;" src="{{imagelink}}" alt="image" />
    `,
})

export class ImageCell implements ICellRendererAngularComp {
    public imagelink;
    agInit(params:any):void {
        this.imagelink = params.value;
    }

    refresh(any){
        return false
    }
    
}
