import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { 

  }

  public hasUser(email : string) : boolean {
    if (email === "clinio@tecgraf.puc-rio.br") return true;
    return false;
  }

  public checkPassword( email: string, password: string) : boolean {
    return true;
  }

}
