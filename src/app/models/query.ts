import { Subject } from 'rxjs';

export interface Query {
  field: string;
  value: Subject<string>;
  order?: 'asc' | 'desc';
}
