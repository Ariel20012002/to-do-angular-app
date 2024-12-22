import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/UI/main/app.component';
import { config } from './app/UI/main/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
