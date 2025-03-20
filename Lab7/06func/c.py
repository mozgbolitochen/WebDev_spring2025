def count_digits(s):
    if not s:
        return 0
    return (s[0].isdigit()) + count_digits(s[1:])

s = input()
print(count_digits(s))
