USE [ttc-assignment-no1];
GO

CREATE TABLE dbo.Persons (
    ID INT IDENTITY(1,1) PRIMARY KEY, 
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Address VARCHAR(100),
    BirthDate Datetime,
    IsActive BIT NOT NULL DEFAULT 1
);

Insert into dbo.Persons(FirstName,LastName,Address,BirthDate)
Values('Saksit','Wannasuk','Bangkok Thailand','2001-05-16');

drop table dbo.Persons;