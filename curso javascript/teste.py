def qq(a,c):
    if (a/7 == 5):
        c = not c
    else:
        a <- a%4
    return (a,c)

a = 22
c = True

if (not c):
    b = a/8
else:
    b = a/5

qq(a,c)

print(a,b,c)
