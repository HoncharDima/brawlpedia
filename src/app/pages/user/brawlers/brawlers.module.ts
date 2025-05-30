import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { BrawlersComponent } from './brawlers.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: BrawlersComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [BrawlersComponent]
})
export class BrawlersModule {}
