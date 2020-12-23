-- -- -- -- -- -- VIEWS

-- aceitam select, insert update, delete

-- CREATE [or replace] [temp | TEMPORARY] [RECURSIVE] VIEW name [(column_name[,...])] [WITH (view_option_name [=view_opstion_value [,...]])] 
-- AS query
-- [WITH [CASCADED | LOCAL] CHECK OPTION]

-- CREATE OR REPLACE VIEW vw_bancos as (
-- 	SELECT numero, nome, ativo
-- 	FROM banco
-- );
-- SELECT numero, nome, ativo
-- FROM vw_bancos

-- -- RECURSIVE
-- OBRIGATÓRIO A EXISTENCIA DOS  CAMPOS DA VIEW
-- UNION ALL

-- CREATE OR REPLACE RECURSIVE VIEW (nome da view) (campos da view) AS(
-- 	SELECT base
-- 	UNION ALL
-- 	SELECT campo
-- 	FROM tabela_base
-- 	JOIN (nome_da_view)
-- );

-- -- WITH OPTIONS
SELECT numero, nome, ativo FROM banco;

CREATE OR REPLACE VIEW vw_bancos AS(
	SELECT numero, nome, ativo FROM banco
);

SELECT numero, nome, ativo FROM vw_bancos;

CREATE OR REPLACE VIEW vw_bancos2 (banco_numero, banco_nome, banco_ativo) AS(
	SELECT numero, nome, ativo FROM banco
);

SELECT banco_numero, banco_nome, banco_ativo FROM vw_bancos2;

INSERT INTO vw_bancos2 (banco_numero, banco_nome, banco_ativo) VALUES (51, 'Banco Boa Ideia', TRUE);

SELECT banco_numero, banco_nome, banco_ativo FROM vw_bancos2 WHERE banco_numero = 51;

UPDATE vw_bancos2 SET banco_ativo = FALSE WHERE banco_numero = 51;

DELETE FROM vw_bancos2 WHERE banco_numero = 51;

CREATE OR REPLACE TEMPORARY VIEW vw_agencia AS (
	SELECT nome FROM agencia
);

SELECT nome from vw_agencia;

CREATE OR REPLACE VIEW vw_bancos_ativos AS(
	SELECT numero, nome, ativo FROM banco WHERE ativo IS TRUE
) WITH LOCAL CHECK OPTION;

DELETE FROM vw_bancos_ativos WHERE numero = 51;

INSERT INTO vw_bancos_ativos (numero, nome, ativo) VALUES (51, 'Banco Boa Ideia', FALSE);

CREATE OR REPLACE VIEW vw_bancos_com_a AS(
	SELECT numero, nome, ativo FROM vw_bancos_ativos WHERE nome ILIKE 'a%'
) WITH LOCAL CHECK OPTION;







