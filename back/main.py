from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import uuid
from datetime import datetime

con = sqlite3.Connection("ivent")
cur = con.cursor()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def seeIvent():
    return cur.execute("SELECT * FROM ivent").fetchall()

def newIvent(date: str, name: str, place: str, iventer: str):
    ivent_id = str(uuid.uuid4())
    cur.execute("INSERT INTO ivent (id, date, name, place, iventer) VALUES (?, ?, ?, ?, ?)", (ivent_id, date, name, place, iventer))
    con.commit()
    return { "id": id, "date": date, "name": name, "place": place, "iventer": iventer }

@app.get("/ivent/all")
async def allIvent():
    return {"all": seeIvent()}

@app.get("/ivent")
async def tryIvent():
    rez = []
    for i in seeIvent():
        # 2023-10-03 12:34:56.789012
        if i[1].split("-")[0] > str(datetime.now()).split("-")[0]:
            rez.append({"date": i[1], "name": i[2], "place": i[3], "iventer": i[4]})
        elif i[1].split("-")[0] == str(datetime.now()).split("-")[0] and i[1].split("-")[1] > str(datetime.now()).split("-")[1]:
            rez.append({"date": i[1], "name": i[2], "place": i[3], "iventer": i[4]})
        elif i[1].split("-")[0] == str(datetime.now()).split("-")[0] and i[1].split("-")[1] == str(datetime.now()).split("-")[1] and i[1].split("-")[2] >= str(datetime.now()).split("-")[2]:
            rez.append({"date": i[1],"name": i[2],"place": i[3],"iventer": i[4]})
        if len(rez) > 2:
            break
    return {"arr": rez}

@app.get("/test")
def test():
    return {"testing": "ok"}
# cur.execute("DELETE FROM ivent")
# print(newIvent("2024-10-12 18:00", "Рекрутская вечёрка", "Луга", "Ветерочки"))
# print(newIvent("2024-10-17 18:30", "Покровская вечёрка", 'ПМК "Берёзка"', "?"))
# print(newIvent("2024-11-14 17:30", "Капустки", 'ПМК "Берёзка"', "Ветерочки"))
# print(newIvent("2024-11-14 18:30", "Вечёрка", 'ПМК "Берёзка"', "Ветерочки"))
# print(newIvent("2024-12-01 14:00", "Отчёт о фольклорной экспедиции", 'ПМК "Берёзка"', "Уклад"))
# print(newIvent("2024-12-01 18:00", "Вечёрка (Беломорская)", 'ПМК "Берёзка"', "Уклад"))
# print(newIvent("2024-12-19 18:30", "Былинный вечер", 'ПМК "Берёзка"', "?"))
# print(newIvent("2025-01-16 18:00", "Колядование ", "?", "Ветерочки"))
# print(newIvent("2025-01-19 18:30", "Святочная Вечëрка", 'Дом молодёжи "Квадрат"', "?"))
# print(newIvent("2025-02-27 18:30", "Масленичная вечëрка", 'ПМК "Берëзка"', "?"))
# print(newIvent("2025-03-02 18:30", "Масленица", "Парк Малиновка", "Уклад"))
# print(newIvent("2025-04-24 18:30", "Пасхальная вечёрка", 'ПМК "Берёзка"', "?"))
# print(newIvent("2025-05-17 18:00", "Праздник Кружания день первый", 'ПМК "Берёзка"', "Уклад"))
# print(newIvent("2025-05-18 12:30", "Праздник Кружания день второй", "Парк Малиновка", "Уклад"))
# id, date, name, place, iventer
#
#             id          text
#                         not null
#                         primary key,
#             date        text
#                         not null,
#             name        text
#                         not null,
#             place       text
#                         not null,
#             iventer     text