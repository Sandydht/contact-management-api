/*
  Warnings:

  - You are about to alter the column `phone` on the `contacts` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(20)`.
  - You are about to alter the column `name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `contacts` MODIFY `phone` VARCHAR(20) NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `name` VARCHAR(100) NOT NULL;
