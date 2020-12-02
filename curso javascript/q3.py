a = 4
b = 2
art = b
conta=2
contb=1


for conta in range(conta,a):
    xp = b
    contb = 1
    print('conta=',conta)
    for contb in range(contb,conta-1):
        xp = xp * b
        print('contb=',contb)
        print('xp=',xp)

    art = art + xp
    print('art=',art)


print(art)