import { Component } from '@angular/core';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [NgOtpInputModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent {
 otp: string = '';

  config = {
    allowNumbersOnly: true,
    length: 4, 
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '0',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };

  onOtpChange(otp: string) {
    this.otp = otp;
    console.log('OTP Entered:', this.otp);
  }
}
