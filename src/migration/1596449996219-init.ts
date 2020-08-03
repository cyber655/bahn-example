import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1596449996219 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE user_table (
        id serial PRIMARY KEY,
        email VARCHAR ( 255 ) UNIQUE NOT NULL,
        password VARCHAR ( 255 ) NOT NULL
    )
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
