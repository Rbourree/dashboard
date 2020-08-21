import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UsersService } from "../../../services/users.service";
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}


@Component({
    selector: 'page-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage {
    constructor(private usersService: UsersService, private router: Router) { }

    public emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    public passwordFormControl = new FormControl('', [
        Validators.required
    ]);

    public matcher = new MyErrorStateMatcher();
    public user: any = {};
    public error: string;

    ngOnInit() {

    }

    login() {
        this.error = undefined;
        this.usersService.login(this.user).subscribe(
            (response) => {
                if (response.success) {
                    localStorage.setItem('token', response.data.token)
                    return this.router.navigate(['/home']);
                }
                return this.error = response.error;
            },
            (err) => {
                console.log(err.error.error)
                this.error = err.error.error;
            })
    }


}