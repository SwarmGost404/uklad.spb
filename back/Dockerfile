FROM python:3.11.9-slim

COPY requiremenst.txt requiremenst.txt
RUN pip install -r requiremenst.txt

COPY . .

CMD ["uvicorn", "main:app", "--reload"]