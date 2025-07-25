import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private UserRepo: Repository<User>) {}

  // async updateHashedRefreshToken(userId: number, hashedRefreshToken: string) {
  //   return await this.UserRepo.update({ id: userId }, { hashedRefreshToken });
  // }

  async updateHashedRefreshToken(
    userId: number,
    hashedRefreshToken: string | null,
  ) {
    const user = await this.UserRepo.findOneBy({ id: userId });
    if (!user) return;
    user.hashedRefreshToken = hashedRefreshToken;
    return this.UserRepo.save(user);
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.UserRepo.create(createUserDto);
    return await this.UserRepo.save(user);
  }

  async findByEmail(email: string) {
    return await this.UserRepo.findOne({
      where: { email },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return this.UserRepo.findOne({
      where: { id },
      select: [
        'id',
        'firstName',
        'lastName',
        'avatarUrl',
        'hashedRefreshToken',
        'role',
      ],
    });
    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
