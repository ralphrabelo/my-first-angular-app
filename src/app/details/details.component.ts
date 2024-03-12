import { Component } from '@angular/core'

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrl: './details.component.css'
})
export class DetailsComponent {
    showSecret:boolean = false;
    log = [];

    onToggleDisplayDetails() {
        this.showSecret = !this.showSecret;
        // this.log.push(this.log.length + 1);
        this.log.push(new Date());
    }
}