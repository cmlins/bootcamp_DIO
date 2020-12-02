b = 4000
if (b<1000):
    b=b+100
else:
    if(b<2000):
        b=b+200
    else:
        if(b<3000):
            b=b+300
        else:
            if(b<4000):
                b=b+400
            else:
                b=b+1000

print(b)