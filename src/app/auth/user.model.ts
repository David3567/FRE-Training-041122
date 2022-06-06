export class User {
  constructor(
    id: string,
    email: string,
    public username: string,
    public role: string,
    private _tmdb_key: string,
    private _exp: Date | null,
    private _token: string
  ) {}

  get tokenExpiration() {
    return this._exp;
  }

  get token() {
    if (!this._exp || new Date() > this._exp) {
      return null;
    }
    return this._token;
  }

  get tmdb_key() {
    if (!this._exp || new Date() > this._exp) {
      return null;
    }
    return this._tmdb_key;
  }
}
