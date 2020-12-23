-- -- -- -- -- TRANSAÇÕES

-- BEGIN
-- 	UPDATE KJASDFH
-- 	WHERE
-- COMMIT;

-- BEGIN
-- 	UPDATE KJASDFH
-- 	WHERE
-- ROLLBACK;

SELECT numero, nome, ativo FROM banco ORDER BY numero;

UPDATE banco SET ativo = FALSE WHERE numero = 0;

BEGIN;
UPDATE banco SET ativo = true WHERE numero = 0;
SELECT numero, nome, ativo FROM banco WHERE numero = 0;
ROLLBACK;

BEGIN;
UPDATE banco SET ativo = true WHERE numero = 0;
COMMIT;

