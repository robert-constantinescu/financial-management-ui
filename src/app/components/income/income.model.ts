export class Income {

  constructor(
    public incomeType: string,
    public amount: number,
    public recurrence: string,
    public goal: number,
    public id?: number,
    public username?: string) {
  }

}
