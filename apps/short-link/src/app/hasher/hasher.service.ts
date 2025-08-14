import { Injectable } from '@nestjs/common';

@Injectable()
export class HasherService {
  public async hash(string: string): Promise<string> {
    return `${string} hashed`;
  }
}
