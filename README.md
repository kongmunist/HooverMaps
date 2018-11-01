# HooverMaps
Blurb: Hoover Maps is a website made for my high school's Engineering Academy senior project that guides visitors around our 500,000 sq ft school, with over 200 classrooms and 4 stadiums with a POV slideshow.

Development: I worked with a team of 3 other people and we used Agile Development techniques to plan and execute the project, spending about 2 months developing the site. They did most of the photo-taking and some website design, while I wrote the website's main functionality. It was hosted on AWS for 4 months, from March 2018 until the funds we were given for the project ran out. During that time, we had ~150 visitors/substitute teachers a month and implemented some features that were frequently complained about:
1. Added arrows and an intro page on the Path page.
2. Added text instructions.
3. Made the photos lighter so they would load faster on mobile.

Technical Details: Bootstrap was chosen for the website because navigation webapps tend to be most easily accessed by mobile devices. The webstie implements Dijkstra's algorithm on a graph of the school that automatically retrieved the photos of the school in order. Text instructions were generated based on the number of connections each node of the graph had. 
