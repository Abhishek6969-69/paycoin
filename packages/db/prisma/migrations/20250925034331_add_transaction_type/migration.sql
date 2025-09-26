-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('DEPOSIT', 'WITHDRAW');

-- AlterTable
ALTER TABLE "OnRampTransaction" ADD COLUMN     "type" "TransactionType" NOT NULL DEFAULT 'DEPOSIT';
