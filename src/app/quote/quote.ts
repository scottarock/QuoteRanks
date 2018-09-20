export class Quote {

  constructor(
    public quote: string = '',
    public author: string = '',
    public votes: number = 0
  ) {

    }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
}
