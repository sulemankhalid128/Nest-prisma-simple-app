/*
  Warnings:

  - Added the required column `age` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "age" INTEGER NOT NULL;
