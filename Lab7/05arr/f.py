a = list(map(int, input().split()))
count = sum(1 for i in range(1, len(a) - 1) if a[i] > a[i - 1] and a[i] > a[i + 1])
print(count)
