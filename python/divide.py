import csv
from itertools import groupby

for key, rows in groupby(csv.reader(open("indiadata.csv")),lambda row: row[5]):
    with open("%s.csv" % key, "w") as output:
        for row in rows:
            output.write(",".join(row) + "\n")