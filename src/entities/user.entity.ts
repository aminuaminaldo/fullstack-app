import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  avatarUrl: string;
  @CreateDateColumn()
  createdAt: Date;
  @Column()
  password: string;
  @OneToMany(() => Property, (property) => property.user, {
    cascade: true,
  })
  properties: Property[];

  @ManyToMany(() => Property, (property) => property.likedBy)
  @JoinTable({ name: 'user_liked_properties' })
  likedProperties: Property[];

  @BeforeInsert()
  hashPassword() {
    // Implement password hashing logic here
    // For example, using bcrypt:
    // this.password = bcrypt.hashSync(this.password, 10);
  }
}
