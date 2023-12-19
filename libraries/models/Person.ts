import { faker } from '@faker-js/faker';

class Person {
  getAll(): string[] {
    return Array.from({ length: 5 }, () => faker.person.fullName());
  }
}
  
export default Person;