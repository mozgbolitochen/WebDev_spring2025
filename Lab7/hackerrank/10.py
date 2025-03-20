if __name__ == '__main__':
    n = int(input())
    student_marks = {name: list(map(float, marks)) for name, *marks in (input().split() for _ in range(n))}
    query_name = input()

    print(f"{sum(student_marks[query_name]) / len(student_marks[query_name]):.2f}")
