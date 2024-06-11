declare var google: any;
import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, GoogleSigninButtonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  private socialService = inject(SocialAuthService);
  socialUser!: SocialUser;

  ngOnInit(): void {
    this.socialService.authState.subscribe((user) => {
      this.socialUser = user;
      console.log(this.socialUser);
      this.socialService
        .getAccessToken(GoogleLoginProvider.PROVIDER_ID)
        .then((resp) => {
          console.log(resp);
        });
    });
    // google.accounts.id.initialize({
    //   client_id:
    //     '731628231224-6cg41d7k6idrdvp3577c7f4ai8kk4085.apps.googleusercontent.com',
    //   callback: (resp: any) => {
    //     console.log(resp);
    //   },
    // });

    // google.accounts.id.renderButton(document.getElementById('google-btn'), {
    //   theme: 'filled_blue',
    //   size: 'large',
    //   shape: 'rectangle',
    //   width: 350,
    // });
  }
}
