-- Create BankBalance table
CREATE TABLE "BankBalance" (
    "id" SERIAL NOT NULL,
    "totalAmount" BIGINT NOT NULL DEFAULT 10000000000,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT now(),
    CONSTRAINT "BankBalance_pkey" PRIMARY KEY ("id")
);
