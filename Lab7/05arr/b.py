a = list(map(int, input().split()))
print(*[x for x in a if x % 2 == 0])
