import requests
import regex as re
from bs4 import BeautifulSoup as bs



#For Debugging Purposes
BASE = "http://127.0.0.1:5000/"

url = BASE + "recipe/mexican/eggs-chicken-dried chillis-bread-lime-cilantro-tomatoes"

#Testing Get & Post Methods
ingredients = requests.get(url)
print(ingredients.json())  

response_dict = requests.post(url)
print(response_dict.json())