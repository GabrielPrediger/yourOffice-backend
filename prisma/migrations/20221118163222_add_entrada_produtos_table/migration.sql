/*
  Warnings:

  - You are about to drop the column `produtoId` on the `entradas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "entradas" DROP CONSTRAINT "entradas_produtoId_fkey";

-- AlterTable
ALTER TABLE "entradas" DROP COLUMN "produtoId";

-- CreateTable
CREATE TABLE "entrada_produto" (
    "entrada_id" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,

    CONSTRAINT "entrada_produto_pkey" PRIMARY KEY ("entrada_id","produto_id")
);

-- CreateTable
CREATE TABLE "_EntradaToProduto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EntradaToProduto_AB_unique" ON "_EntradaToProduto"("A", "B");

-- CreateIndex
CREATE INDEX "_EntradaToProduto_B_index" ON "_EntradaToProduto"("B");

-- AddForeignKey
ALTER TABLE "entrada_produto" ADD CONSTRAINT "entrada_produto_entrada_id_fkey" FOREIGN KEY ("entrada_id") REFERENCES "entradas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entrada_produto" ADD CONSTRAINT "entrada_produto_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntradaToProduto" ADD CONSTRAINT "_EntradaToProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "entradas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntradaToProduto" ADD CONSTRAINT "_EntradaToProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
