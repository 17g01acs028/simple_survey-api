/*
  Warnings:

  - You are about to alter the column `response` on the `Response` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `Response` MODIFY `response` JSON NOT NULL;
