CREATE TABLE product_items (
    id BIGSERIAL NOT NULL,
    name VARCHAR(255) NOT NULL,
    prices INT NOT NULL,
    status BOOLEAN NOT NULL,
    quantity INT NOT NULL,
    image_url VARCHAR(255)
);