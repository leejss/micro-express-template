import { Entity, Column, BaseEntity, ObjectIdColumn } from "typeorm";

@Entity()
export class Person extends BaseEntity {
  @ObjectIdColumn("uuid")
  id: string;

  @Column()
  name: string;
}
