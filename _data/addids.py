#Here be Python 3
#Tool to add id's to the original id-less activities.json file. No longer needed.
import json
activities = json.loads(open('activities.json').read())
idcounter = 1;
for activity in activities:
    activity['id'] = idcounter
    idcounter+=1
with open('activities_with_ids.json', 'w') as newfile:
    newfile.write(json.dumps(activities))
print (activities[3])
