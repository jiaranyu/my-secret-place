export class Todo {
  id: number;
  description: string;
  done: boolean;
  targetDate: Date;
  createDate: Date;

  constructor( description: string, done: boolean, createDate: Date) {
    this.description = description;
    this.done = done;
    this.createDate = createDate;
  }


}
