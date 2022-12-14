/*
  Warnings:

  - Added the required column `isAtrasado` to the `entradas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "entradas" ADD COLUMN     "isAtrasado" BOOLEAN NOT NULL;
