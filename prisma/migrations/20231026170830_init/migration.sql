-- CreateTable
CREATE TABLE "Setting" (
    "chatId" TEXT NOT NULL,
    "territoryId" TEXT NOT NULL,
    "championshipId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("chatId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Setting_chatId_key" ON "Setting"("chatId");
