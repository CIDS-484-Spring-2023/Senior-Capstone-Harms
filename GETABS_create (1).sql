-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2023-05-12 19:25:42.987

-- tables
-- Table: Comments
CREATE TABLE Comments (
    comment_Id int  NOT NULL,
    description varchar(200)  NOT NULL,
    commented_date datetime  NOT NULL,
    Users_ID int  NOT NULL,
    Posts_ID int  NOT NULL,
    CONSTRAINT Comments_pk PRIMARY KEY (comment_Id)
);

-- Table: Followed
CREATE TABLE Followed (
    Followed_ID int  NOT NULL,
    User_ID int  NOT NULL,
    CONSTRAINT Followed_pk PRIMARY KEY (Followed_ID)
);

-- Table: Follower
CREATE TABLE Follower (
    Follower_ID int  NOT NULL,
    User_ID int  NOT NULL,
    CONSTRAINT Follower_pk PRIMARY KEY (Follower_ID)
);

-- Table: Likes
CREATE TABLE Likes (
    like_ID int  NOT NULL,
    User_ID int  NOT NULL,
    Posts_ID int  NOT NULL,
    CONSTRAINT Likes_pk PRIMARY KEY (like_ID)
);

-- Table: Posts
CREATE TABLE Posts (
    post_ID int  NOT NULL,
    description varchar(300)  NOT NULL,
    image varchar(200)  NULL,
    created_date datetime  NOT NULL,
    Users_ID int  NOT NULL,
    CONSTRAINT Posts_pk PRIMARY KEY (post_ID)
);

-- Table: Relationship
CREATE TABLE Relationship (
    relation_ID int  NOT NULL,
    Follower_Follower_ID int  NOT NULL,
    Followed_Followed_ID int  NOT NULL,
    CONSTRAINT Relationship_pk PRIMARY KEY (relation_ID)
);

-- Table: Users
CREATE TABLE Users (
    user_ID int  NOT NULL,
    username varchar(20)  NOT NULL,
    email varchar(30)  NOT NULL,
    password varchar(30)  NOT NULL,
    name varchar(50)  NOT NULL,
    cover_Pic varchar(200)  NULL,
    profile_Pic varchar(200)  NULL,
    CONSTRAINT Users_pk PRIMARY KEY (user_ID)
);

-- foreign keys
-- Reference: Comments_Posts (table: Comments)
ALTER TABLE Comments ADD CONSTRAINT Comments_Posts FOREIGN KEY Comments_Posts (Posts_ID)
    REFERENCES Posts (post_ID)
    ON DELETE SET NULL
    ON UPDATE SET NULL;

-- Reference: Comments_Users (table: Comments)
ALTER TABLE Comments ADD CONSTRAINT Comments_Users FOREIGN KEY Comments_Users (Users_ID)
    REFERENCES Users (user_ID)
    ON DELETE SET NULL;

-- Reference: Follower_Users (table: Follower)
ALTER TABLE Follower ADD CONSTRAINT Follower_Users FOREIGN KEY Follower_Users (User_ID)
    REFERENCES Users (user_ID)
    ON DELETE SET NULL;

-- Reference: Likes_Posts (table: Likes)
ALTER TABLE Likes ADD CONSTRAINT Likes_Posts FOREIGN KEY Likes_Posts (Posts_ID)
    REFERENCES Posts (post_ID)
    ON DELETE SET NULL;

-- Reference: Likes_Users (table: Likes)
ALTER TABLE Likes ADD CONSTRAINT Likes_Users FOREIGN KEY Likes_Users (User_ID)
    REFERENCES Users (user_ID)
    ON DELETE SET NULL;

-- Reference: Posts_Users (table: Posts)
ALTER TABLE Posts ADD CONSTRAINT Posts_Users FOREIGN KEY Posts_Users (Users_ID)
    REFERENCES Users (user_ID)
    ON DELETE SET NULL;

-- Reference: Relationship_Followed (table: Relationship)
ALTER TABLE Relationship ADD CONSTRAINT Relationship_Followed FOREIGN KEY Relationship_Followed (Followed_Followed_ID)
    REFERENCES Followed (Followed_ID)
    ON DELETE SET NULL;

-- Reference: Relationship_Follower (table: Relationship)
ALTER TABLE Relationship ADD CONSTRAINT Relationship_Follower FOREIGN KEY Relationship_Follower (Follower_Follower_ID)
    REFERENCES Follower (Follower_ID)
    ON DELETE SET NULL;

-- Reference: Relationships_Users (table: Followed)
ALTER TABLE Followed ADD CONSTRAINT Relationships_Users FOREIGN KEY Relationships_Users (User_ID)
    REFERENCES Users (user_ID)
    ON DELETE CASCADE;

-- End of file.

