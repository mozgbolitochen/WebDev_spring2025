def can_obtain(n):
    if n == 1:
        return True
    if n < 1:
        return False
    return can_obtain(n - 3) or can_obtain(n - 5)

n = int(input())
print("YES" if can_obtain(n) else "NO")
