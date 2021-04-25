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

## Отримання фото та гіфок
Фото та гіфки, які приходять у відповіть можна розміщати на сторінці. Наприклад, можемо отримати фото якоїсть породи та вставити її в HTML-елемент на своєму сайті.

https://api.thecatapi.com/v1/images/search - приклад запиту для повернення випадкового фото кота. (GET)
https://api.thecatapi.com/v1/images/{image_id} - приклад запиту для повернення конкретного фото кота. (GET)
https://api.thecatapi.com/v1/images/upload - приклад запиту для загрузки свого фото кота. (POST)
https://api.thecatapi.com/v1/images - приклад запиту для отримання своїх завантажених фото котів. (GET)
https://api.thecatapi.com/v1/images/{image_id} - приклад запиту для видалення фото, яке ми завантажили. (DELETE)

Спробуємо отримати випадкове фото кота для прикладу. **Request** -  https://api.thecatapi.com/v1/images/search 
**Response** - [
  {
    "breeds": [],
    "height": 343,
    "id": "bhn",
    "url": "https://cdn2.thecatapi.com/images/bhn.jpg",
    "width": 500
  }
]Як бачимо, ми отримали посилання на фото з котом.

## Отримання інформації про конкретну породу
Для того, щоб отримати інформацію про конкретну породу треба виконати запит https://api.thecatapi.com/v1/breeds/search?q={name}

Приклад запиту: https://api.thecatapi.com/v1/breeds/search?q=sib
Приклад відповіді: [
    {
        "weight": {
            "imperial": "8 - 16",
            "metric": "4 - 7"
        },
        "id": "sibe",
        "name": "Siberian",
        "cfa_url": "http://cfa.org/Breeds/BreedsSthruT/Siberian.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/siberian",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/siberian",
        "temperament": "Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate",
        "origin": "Russia",
        "country_codes": "RU",
        "country_code": "RU",
        "description": "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ",
        "life_span": "12 - 15",
        "indoor": 0,
        "lap": 1,
        "alt_names": "Moscow Semi-longhair, HairSiberian Forest Cat",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 4,
        "dog_friendly": 5,
        "energy_level": 5,
        "grooming": 2,
        "health_issues": 2,
        "intelligence": 5,
        "shedding_level": 3,
        "social_needs": 4,
        "stranger_friendly": 3,
        "vocalisation": 1,
        "experimental": 0,
        "hairless": 0,
        "natural": 1,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Siberian_(cat)",
        "hypoallergenic": 1,
        "reference_image_id": "3bkZAjRh1"
    }
]
