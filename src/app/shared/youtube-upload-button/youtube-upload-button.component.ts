import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[yt-upload]', // Attribute selector
  template: `<ng-content></ng-content>`,
})
export class YouTubeUploadButton {
  handleClick() {
    console.log('YouTube upload button clicked!');
    // Add custom logic, e.g., trigger YouTube API upload
  }
}
