import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleSwitch]' // Attribute selector
})
export class ToggleSwitchDirective {
  private isChecked = false;

  @HostBinding('class.toggle-on') get toggleOn() {
    return this.isChecked;
  }

  @HostBinding('class.toggle-off') get toggleOff() {
    return !this.isChecked;
  }

  @HostListener('click') onToggle() {
    this.isChecked = !this.isChecked;
  }
}