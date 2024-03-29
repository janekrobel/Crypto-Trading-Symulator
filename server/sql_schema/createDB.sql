CREATE TABLE IF NOT EXISTS USER(
  id INT AUTO_INCREMENT NOT NULL,
  email VARCHAR(256) NOT NULL,
  balance FLOAT NOT NULL,
  nick VARCHAR(256),
  img VARCHAR(256),
  about TEXT,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS COIN (
  id INT AUTO_INCREMENT,
  uuid VARCHAR(20) NOT NULL,
  symbol VARCHAR(20) NOT NULL,
  name VARCHAR(64) NOT NULL ,
  iconUrl VARCHAR(256) NOT NULL,
  marketCap BIGINT NOT NULL,
  price FLOAT NOT NULL,
  priceChange FLOAT NOT NULL,
  volumen24 BIGINT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS POSITION (
  id INT AUTO_INCREMENT NOT NULL,
  id_user INT NOT NULL ,
  id_coin INT NOT NULL ,
  price FLOAT NOT NULL ,
  amounts FLOAT NOT NULL,
  date DATETIME NOT NULL ,
  type VARCHAR(5) NOT NULL,
  FOREIGN KEY (id_user) REFERENCES USER (id),
  FOREIGN KEY (id_coin) REFERENCES COIN (id),
  PRIMARY KEY(id)
);