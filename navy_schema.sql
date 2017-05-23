CREATE TABLE fleet (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE duty (
  id BIGSERIAL PRIMARY KEY,
  activity VARCHAR (255)
);

CREATE TABLE ship (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  date_built DATE,
  fleetid INT,
  FOREIGN KEY (fleetid) REFERENCES fleet(id)
);

CREATE TABLE sailor (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  birthdate DATE,
  shipid INT,
  rank VARCHAR(255),
  FOREIGN KEY (shipid) REFERENCES ship(id)
);


CREATE TABLE assignment (
  id BIGSERIAL PRIMARY KEY,
  dutyid INT,
  sailorid INT,
  FOREIGN KEY (dutyid) REFERENCES duty(id),
  FOREIGN KEY (sailorid) REFERENCES sailor(id)
);



