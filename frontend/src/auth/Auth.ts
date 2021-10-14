class Auth {
    authenticated: boolean | any;

    constructor() {
        this.authenticated = false;
    }

    login(email: string, callback?: Function) {
        const flag: boolean = this.validateEmail(email)
        if(flag) {
            console.log('this! this!!')
            this.authenticated = true;
            localStorage.setItem('isAuth', this.authenticated);
            localStorage.setItem('email', email);
            if(callback) callback();
        }
    }


    logout(callback?: Function) {
        this.authenticated = false;
        localStorage.clear();
        if(callback) callback();
    }

    isAuthenticated = () => {
        const isAuth: string | null = localStorage.getItem('isAuth')
        if (isAuth) return this.authenticated = true;
        return this.authenticated = false
    };


    // Validations
    validateEmail(email: string) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            return true;
        }
        alert('You have entered an invalid email address!');
        return false;
    }
}

export default new Auth();