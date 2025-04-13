/*
  Warnings:

  - Added the required column `filePath` to the `CourseResource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CourseResource" ADD COLUMN     "filePath" TEXT NOT NULL;
