v = [5,1,4,2,7,8,3,6]

for i in range(7,5):
    aux = v[i]
    v[i] = v[8-i+1]
    v[8-i+1] = aux
    

v[2] = v[0]
v[v[2]] = v[v[1]]

print(v)