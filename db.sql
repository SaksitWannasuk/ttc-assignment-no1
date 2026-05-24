USE [ttc-assignment-no1];
GO

CREATE TABLE dbo.Persons (
    ID INT IDENTITY(1,1) PRIMARY KEY, 
    FirstName NVARCHAR(200) NOT NULL,
    LastName NVARCHAR(200) NOT NULL,
    Address VARCHAR(4000),
    BirthDate DATETIME2,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedTime DATETIME2,
    UpdatedTime DATETIME2,
);

INSERT INTO dbo.Persons (FirstName, LastName, Address, BirthDate, CreatedTime) VALUES
('Saksit','Wannasuk','Bangkok Thailand','2001-05-16',GETDATE()),
('Nattapong', 'Rattanakun', '123 Sukhumvit Rd, Bangkok Thailand', '1995-03-12', GETDATE()),
('Chayanit', 'Prasertsook', '45 Ratchadaphisek Rd, Bangkok Thailand', '2002-11-25', GETDATE()),
('Teerapat', 'Srisai', 'Chiang Mai Thailand', '1988-07-04', GETDATE()),
('Pimchanok', 'Muangdee', 'Phuket Thailand', '1999-01-30', GETDATE()),
('Thanakorn', 'Tangsuwan', '88 Rama 9 Rd, Bangkok Thailand', '1993-09-18', GETDATE()),
('Sarisa', 'Chongcharoen', 'Chonburi Thailand', '2004-05-05', GETDATE()),
('Krittin', 'Panyasiri', 'Nonthaburi Thailand', '1991-12-14', GETDATE()),
('Ariya', 'Suksamran', '77 Sathorn Rd, Bangkok Thailand', '2000-08-22', GETDATE()),
('Phuwadon', 'Khamsri', 'Khon Kaen Thailand', '1985-04-17', GETDATE()),
('Kamonchanok', 'Saetang', 'Samut Prakan Thailand', '1997-10-09', GETDATE()),
('Anucha', 'Meesuk', 'Nakhon Ratchasima Thailand', '1990-02-28', GETDATE()),
('Warisara', 'Boonmee', 'Pathum Thani Thailand', '2003-06-11', GETDATE()),
('Chaiwat', 'Asavabhumi', 'Silom Rd, Bangkok Thailand', '1994-11-03', GETDATE()),
('Nutnicha', 'Charoenpanich', 'Hua Hin, Prachuap Khiri Khan Thailand', '2001-07-19', GETDATE()),
('Sittichai', 'Phosri', 'Udon Thani Thailand', '1989-05-24', GETDATE()),
('Pattaradanai', 'Songkram', 'Ayutthaya Thailand', '1996-10-15', GETDATE()),
('Sirirat', 'Kulwong', 'Songkhla Thailand', '1992-08-08', GETDATE()),
('Panupong', 'jitdi', 'Rayong Thailand', '1998-04-21', GETDATE()),
('Suchada', 'Thanasuk', 'Ladprao, Bangkok Thailand', '2005-02-13', GETDATE()),
('Tawan', 'Saelim', 'Surat Thani Thailand', '1987-12-31', GETDATE());

Select * from dbo.Persons;

drop table dbo.Persons;