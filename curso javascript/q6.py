v = [8,2,4,10,3,1,7]

for i in range(len(v)):
    for j in range(len(v)):
        while (((j+1) <= len(v))==True):
            if(v[j] < v[j+1]):
                temp = v[j]
                v[j] = v[j+1]
                v[j+1] = temp
                print(v)

print(v)
