import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input()
  public header: string = '';
  @Input()
  public icon: string = '';
  @Input()
  public textButton: string = '';

  @Output()
  public onInteract: EventEmitter<any> = new EventEmitter();

  public status: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  cancelClicked() {
    this.onInteract.emit(false);
  }

  // Função para quando o botão confirmar for clicado:
  confirmClicked() {
    this.onInteract.emit(true);
  }

  setStatus(newStatus: boolean) {
    this.status = newStatus;
  }
}
