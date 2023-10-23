import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: MenuItem[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [
                    { label: 'Chat', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Encuesta', icon: 'pi pi-fw pi-link', url: 'https://forms.office.com/r/vwfDWZ5e2Z' }
                ]
            },
            {
                label: 'Información ',
                items: [
                    { label: 'Importancia',icon: 'pi pi-fw pi-star-fill', url: 'https://www.bupasalud.com/salud/importancia-de-la-salud-mental' },
                    { label: 'Minsalud',icon: 'pi pi-heart-fill', url: 'https://www.minsalud.gov.co/salud/publica/SMental/Paginas/gestion-integrada-para-la-salud-mental.aspx' },
                    { label: 'Nueva EPS',icon: 'pi pi-heart', url: 'https://www.nuevaeps.com.co/node/136783' },
                    { label: 'Salud Total',icon: 'pi pi-heart-fill', url: 'https://saludtotal.com.co/sin-categoria/tu-salud-mental/' },
                    { label: 'Famisanar',icon: 'pi pi-heart', url: 'https://blog.famisanar.com.co/orientacion-salud-mental' },
                    { label: 'Compensar',icon: 'pi pi-heart-fill', url: 'https://corporativo.compensar.com/salud/plan-de-beneficios-en-salud/Equilibradamente' },
                    
                ]
            }
        ];
    }
}
