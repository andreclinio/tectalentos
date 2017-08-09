import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { 

  }

  public hasUser(email : string) : boolean {
    if (email === "clinio@tecgraf.puc-rio.br") return true;
    return false;
  }

  public checkPassword(email: string, password: string) : boolean {
    if (email === "clinio@tecgraf.puc-rio.br" && password === "1234") return true;
    return false;
  }

  public hasLoggedUser() : boolean {
     return true;
  }
}
