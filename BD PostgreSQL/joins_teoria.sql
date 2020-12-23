-- -- -- -- -- JOINs

-- -- -- -- -- JOIN(INNER)
-- SELECT tab_1.campos, tab_2.campos
-- FROM tab_1
-- JOIN tab_2
-- ON tab_2.campo = tab_1 = campo;

-- -- -- -- -- LEFT JOIN(OUTER)
-- SELECT tab_1.campos, tab_2.campos
-- FROM tab_1
-- LEFT JOIN tab_2
-- ON tab_2.campo = tab_1 = campo;

-- -- -- -- -- RIGHT JOIN(OUTER)
-- SELECT tab_1.campos, tab_2.campos
-- FROM tab_1
-- RIGHT JOIN tab_2
-- ON tab_2.campo = tab_1 = campo;

-- -- -- -- -- FULL JOIN
-- SELECT tab_1.campos, tab_2.campos
-- FROM tab_1
-- FULL JOIN tab_2
-- ON tab_2.campo = tab_1 = campo;

-- -- -- -- -- CROSS JOIN
-- -- Desperdício de recurso -> evitar usar
-- SELECT tab_1.campos, tab_2.campos
-- FROM tab_1
-- CROSS JOIN tab_2

