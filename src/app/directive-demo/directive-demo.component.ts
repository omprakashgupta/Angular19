import { Component } from '@angular/core';
import { ToggleSwitchDirective } from '../core/directives/toggle-switch.directive';
import { YouTubeUploadButton } from '../shared/youtube-upload-button/youtube-upload-button.component';

@Component({
  selector: 'app-directive-demo',
  imports: [ToggleSwitchDirective, YouTubeUploadButton],
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.css'
})
export class DirectiveDemoComponent {

}
