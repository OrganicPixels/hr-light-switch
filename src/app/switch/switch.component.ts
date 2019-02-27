import { Component, OnInit, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Output() light = new EventEmitter();
  @Output() noLight = new EventEmitter();
  public lightsOn = false;
  constructor() { }

  ngOnInit() {
  }
  toggleLight() {
    this.lightsOn ? this.noLight.emit('No Light') : this.light.emit('Light');
    this.lightsOn = !this.lightsOn;
  }
}
