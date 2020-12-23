CREATE OR REPLACE FUNCTION func_somar (INTEGER, INTEGER)
RETURNS INTEGER
SECURITY DEFINER
RETURNS NULL ON NULL INPUT
LANGUAGE SQL
AS $$
	SELECT COALESCE($1, 100) + COALESCE($2, 100);
$$;

SELECT func_somar(1, 100);

-- coalesce retorna o primeiro valor não nulo

SELECT COALESCE(null, 'daniel', 'digital', 'daniel'); 
