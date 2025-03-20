def max_digit(s, max_val=0):
    if not s:
        return max_val
    return max_digit(s[1:], max(max_val, int(s[0])))

s = input()
print(max_digit(s))
