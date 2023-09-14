l = []
c = 0
str = input("Enter String: ")
str1 = input("Enter String to search for a word or words: ")

str = str.split(' ')
str1 = str1.split(' ')

for i in str1:
    for j in str:
        if i==j and i not in l:
            l.append(i)
print(l)
for k in l:
    print(k, str.count(k))
