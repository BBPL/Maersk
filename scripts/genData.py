import pandas as pd

df = pd.read_csv(r'./here.csv')
# portTypes = []
# for x in df['prtsize']:
#     if x not in portTypes:
#         portTypes.append(x)
# res = df.loc[df['prtsize'] == 'Large']
# big = df.loc[df['prtsize'] == 'Big']
# res = res.append(big)
# res = res[['portname','code','country','iso3','latitude','longitude']]
# print(res.size)
df.to_json(r'./ports.json', orient='records')
# df.to_csv(r'./here.csv')



# print(portTypes)