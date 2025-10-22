/*
  Warnings:

  - A unique constraint covering the columns `[DepartmentId]` on the table `Departments` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Employees] (
    [EmployeeId] NVARCHAR(1000) NOT NULL,
    [FirstName] NVARCHAR(1000) NOT NULL,
    [LastName] NVARCHAR(1000) NOT NULL,
    [Email] NVARCHAR(1000) NOT NULL,
    [Salary] DECIMAL(32,16) NOT NULL,
    [DepartmentId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Employees_pkey] PRIMARY KEY CLUSTERED ([EmployeeId]),
    CONSTRAINT [Employees_Email_key] UNIQUE NONCLUSTERED ([Email])
);

-- CreateIndex
ALTER TABLE [dbo].[Departments] ADD CONSTRAINT [Departments_DepartmentId_key] UNIQUE NONCLUSTERED ([DepartmentId]);

-- AddForeignKey
ALTER TABLE [dbo].[Employees] ADD CONSTRAINT [Employees_DepartmentId_fkey] FOREIGN KEY ([DepartmentId]) REFERENCES [dbo].[Departments]([DepartmentId]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
