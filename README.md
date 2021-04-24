# PIS_LAB6
Created for 6th lab. 

# Description of thecatapi.

Сервіс надає доступ до фото/гіфок котів, інформацію про різні породи.

## API KEY
Для отримання фото та гіфок котів аутентифікація не потрібна. Якщо ж ви хочете отримати інформацію про породи, то необхідно мати API key.
Спершу треба зареєструватися за посиланням https://thecatapi.com/. Api key буде віправлено на адресу вказану при реєстрації.

![ApiKey](/images/apiKey.PNG)

Api key потрібно передавати в якості header. 
headers[“x-api-key”] = "ABC123"
Також можливо передавати прямо в рядку https://thecatapi.com/v1/images?api_key=ABC123.



