#Here be Pyhon 3
#Tool to split posts in one file up into separate md files with proper names
from slugify import slugify
activities = open('posts.yml').read()
posts = activities.split('- type:')
print ('{} post candidates found'.format(len(posts)))
#print repr(len(posts)) + " posts found"
#print " posts found"
counter = 0
for post in posts:
    if ("id" in post):
        for line in post.splitlines():
           if line.lstrip().startswith("date:"):
               dateArray = line.split("date:")
           if line.lstrip().startswith("start:"):
               startArray = line.split("start:")
               starttime = startArray[1].lstrip().replace("'","")
           if line.lstrip().startswith("title:"):
               titleArray = line.split("title:")
               title = titleArray[1].lstrip()
           if line.lstrip().startswith("id:"):
               IDArray = line.split("id:")
               ID = IDArray[1].lstrip()
        filename = '2016-07-01-{}-{}-{}.md'.format(ID,slugify(title),starttime.replace(":","-"))
        with open(filename, 'w') as postfile:
            postfile.write('---\n'+'type:'+post+'---')
        counter+=1
print ("all done!")
