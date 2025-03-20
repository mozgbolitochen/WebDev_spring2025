if __name__ == '__main__':
    n = int(input())
    students = [[input(), float(input())] for _ in range(n)]

    second_lowest = sorted(set(score for name, score in students))[1]
    names = sorted(name for name, score in students if score == second_lowest)

    for name in names:
        print(name)
