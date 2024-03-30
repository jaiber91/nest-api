import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log(value, metadata);
    //Validando que el value sea un mondo id valido
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} is not a valid MongoId`);
    }
    return value;
  }
}
