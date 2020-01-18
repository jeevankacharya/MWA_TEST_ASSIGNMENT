const express =require('express');

const superagent =require('superagent');

const {from} =require('rxjs');

const {map} =require('rxjs/operators');

const app =express();
app.enable("trust proxy");
app.set("x-powered-by",false);
app.enable("case sensitive routing");
app.enable("strict routing", true);

 const port =8000;
 const url = "https://randomuser.me/api/?results=10";

 app.get("/user", (req, res) => {
    const users = getUser();
  
    res.links({
        next: "https://randomuser.me/api/?results=10&page=2",
        last: "https://randomuser.me/api/?results=10&page=10"
      });

      from(users)
      .pipe(
        map(user => {
          return user.data.results.map(u => {
            return {
              first: u.name.first,
              last: u.name.last
            };
          });
        })
      )
      .subscribe(data => {
      
        res.send(data);
      });
  });
  
  //fetch the user data using superagent
  async function getUser(page) {
    try {
      const response = await superagent.get(url.concat("&", page));
  
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  
  app.listen(port, _ => console.log(`Listening to port ${port}`));
  