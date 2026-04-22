-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "pass_phrase" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_pass_phrase_key" ON "User"("pass_phrase");
