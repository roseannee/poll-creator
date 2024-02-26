-- CreateTable
CREATE TABLE "Poll" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "options" TEXT[],

    CONSTRAINT "Poll_pkey" PRIMARY KEY ("id")
);
