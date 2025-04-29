import React, { useContext } from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaceIcon from "@mui/icons-material/Place";
import { UserContext } from "../../context/userContext";
import { HomeApp, HomeBox, InformationBox } from "./styles";

export function Home() {
  const user = useContext(UserContext);
  console.log("ana aq");
  console.log(user);

  return (
    <HomeApp>
      <HomeBox>
        <Typography variant='h3'>Pilates</Typography>
        <Typography paragraph>
          O Pilates tem por objetivo desenvolver o controle do próprio corpo,
          através de movimentos que estimulem o corpo e a mente. Além disso,
          oferece uma vasta gama de benefícios, desde o fortalecimento muscular
          e melhora da postura até o aumento da flexibilidade e redução do
          estresse. Além disso, ajuda na recuperação de lesões e pode ser
          benéfico para pessoas de todas as idades, incluindo grávidas e idosos.
        </Typography>
        <Typography paragraph>
          E com o objetivo de ajudar as pessoas a entederem o próprio corpo,
          tratarem lesões e melhorarem a qualidade de vida, a professora
          Michelle Esquia, com mais de 20 anos de experiência, fundou seu espaço
          no Caixeiros viajantes, onde atende a mais de 5 anos.
        </Typography>

        <InformationBox>
          <Typography variant='h3'>Information</Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 360
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PlaceIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Location'
                secondary='Caixeiros Viajantes'
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SelfImprovementIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Pilates teacher'
                secondary='Michelle Esquia'
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WatchLaterIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Opening hours'
                secondary='Monday to Friday from 7 am to 6 pm'
              />
            </ListItem>
          </List>
        </InformationBox>
      </HomeBox>
    </HomeApp>
  );
}
