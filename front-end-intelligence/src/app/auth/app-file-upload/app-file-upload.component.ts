import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-app-file-upload',
  templateUrl: './app-file-upload.component.html',
  styleUrls: ['./app-file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AppFileUploadComponent,
      multi: true,
    },
  ],
})
export class AppFileUploadComponent implements OnInit {
  @Input() progress;
  onChange: Function;

  public file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    console.log(file);
    this.onChange(file);
    this.file = file;
  }

  constructor(private host: ElementRef<HTMLInputElement>) {}

  ngOnInit(): void {}

  writeValue(value: null) {
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {}
}
