export class Quote {

  votes: number;
  quote: string;
  author: string;

  constructor() {
    this.quote='';
    this.author='';
    this.votes = 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
}
