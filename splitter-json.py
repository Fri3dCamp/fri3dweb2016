#Here be Pyhon 3
#Tool to split posts in one file up into separate md files with proper names
from slugify import slugify
import json
activities = json.loads(open('_data/activities.json').read())
#print repr(len(posts)) + " posts found"
#print " posts found"
for activity in activities:
    ID = activity["id"]
    title = activity["title"]
    #print (activity)
    filecontent="---\n"
    filecontent+="layout: post\n"
    filecontent+="type: "+activity["type"]+"\n"
    if ("hide" in activity):
        filecontent+="hide: {}\n".format(activity["hide"])
    filecontent+="title: "+activity["title"]+"\n"
    if ("speakers" in activity):
        filecontent+="speakers:\n"
        for el in activity["speakers"]:
            filecontent+="- {}\n".format(el)
    filecontent+="id: {}\n".format(activity["id"])
    filecontent+="timing: \n"
    for key, value in activity["timing"].items():
        filecontent+="   "+ key +": '"+value+"'\n"
    filecontent+="track: "+activity["track"]+"\n"
    if ("extraclass" in activity):
        filecontent+="extraclass: {}\n".format(activity["extraclass"])
    if ("z-index" in activity):
        filecontent+="z-index: {}\n".format(activity["z-index"])
    #for line in post.splitlines():
    #   if line.lstrip().startswith("date:"):
    #       dateArray = line.split("date:")
    #   if line.lstrip().startswith("start:"):
    #       startArray = line.split("start:")
    #       starttime = startArray[1].lstrip().replace("'","")
    #   if line.lstrip().startswith("title:"):
    #       titleArray = line.split("title:")
    #       title = titleArray[1].lstrip()
    #   if line.lstrip().startswith("id:"):
    #       IDArray = line.split("id:")
    #       ID = IDArray[1].lstrip()
    filecontent+="---\n"
    if ("description" in activity):
        filecontent+=activity["description"]
    filename = '_posts/2016-07-01-{}-{}.md'.format(activity["id"],slugify(activity["title"]))
    with open(filename, 'w') as postfile:
        postfile.write(filecontent)
print ("all done!")
