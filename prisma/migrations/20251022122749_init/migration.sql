/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropTable
DROP TABLE [dbo].[Users];

-- CreateTable
CREATE TABLE [dbo].[Departments] (
    [DepartmentId] NVARCHAR(1000) NOT NULL,
    [DepartmentName] NVARCHAR(1000) NOT NULL,
    [DepartmentLocation] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Departments_pkey] PRIMARY KEY CLUSTERED ([DepartmentId],[DepartmentName])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
