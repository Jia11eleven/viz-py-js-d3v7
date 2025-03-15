import requests
import json

REST_EU_ROOT_URL = "https://api.countrylayer.com/v2"
API_KEY = 'a9bc9857b6682cb44071d7aaa13fa8bf'

def REST_country_request(field='all',name=None, params=None):
    headers={'User-Agent':'Mozilla/5.0'}
    if not params:
        params = {}
    if field=='all':
        response = requests.get(REST_EU_ROOT_URL+'/all?access_key='+API_KEY)
    else:
        url = '%s/%s/%s'%(REST_EU_ROOT_URL,
                            field,
                            name+'?access_key='+API_KEY)
        print('Requesting URL: '+url)
        response = requests.get(url,params=params, headers=headers)

    if not response.status_code==200:
        raise Exception('Request failed with status code' + str(response.status_code))
    return response

response = REST_country_request('all')
data = response.json()

with open("D:/Python_Scripts/DataViz_JS_Python/data/all_country.json", "w") as file:
    json.dump(data, file, indent=4)  # Use indent for pretty formatting
print("JSON response saved to 'all_country.json'")