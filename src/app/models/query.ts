import { Subject } from 'rxjs/Subject';

export interface Query {
  field: string;
  value: Subject<string>;
  order?: 'asc' | 'desc';
}
