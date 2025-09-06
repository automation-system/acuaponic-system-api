/*
  Warnings:

  - Made the column `start_date` on table `automation` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `automation` MODIFY `start_date` DATETIME(3) NOT NULL;
