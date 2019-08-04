import { School } from '../models/school';
import { BehaviorSubject } from 'rxjs';
export declare class SchoolService {
    private school;
    constructor();
    setValue(school: School): void;
    get(): BehaviorSubject<School>;
    getValue(): School;
}
