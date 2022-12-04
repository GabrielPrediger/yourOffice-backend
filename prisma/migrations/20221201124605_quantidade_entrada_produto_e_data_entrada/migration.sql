/*
  Warnings:

  - Added the required column `quantidade` to the `entrada_produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "entrada_produto" ADD COLUMN     "quantidade" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "entradas" ADD COLUMN     "data_fim_aluguel" TIMESTAMP(3),
ADD COLUMN     "data_inicio_aluguel" TIMESTAMP(3);
