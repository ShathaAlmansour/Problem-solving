const whosOnline = (friends) => {
    const s = {};
    for(let i =0; i< friends.length ;i++)
      {
        console.log(friends[i].status);
        if(friends[i].status ==="offline")
          {
            if(!s.offline) s.offline=[]
            s.offline.push(friends[i].username)
            //console.log(s);
          }
        else
          {
            if(friends[i].lastActivity >10)
              {
                 if(!s.away) s.away=[]
            s.away.push(friends[i].username)
              }
            else
              {
                 if(!s.online) s.online=[]
            s.online.push(friends[i].username)
              }
          }
      }
    return s;
  }