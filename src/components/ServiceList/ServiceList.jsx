import { useState } from "react";

import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

import {
  List,
  ListItem,
  HeadItem,
  Dot,
  Title,
  ToggleButton,
  BodyItem,
} from "./ServiceList.styled";

const ServiceList = ({ data }) => {
  const [openItem, setOpenItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const onClick = (id) => {
    setIsOpen(!isOpen);
    setOpenItem(id);
  };
  return (
    <>
      {data && (
        <List>
          {data.map((item) => (
            <ListItem key={item.id}>
              <HeadItem>
                <Dot></Dot>
                <Title>{item.title}</Title>

                <ToggleButton
                  onClick={() => onClick(item.id)}
                  isopen={isOpen && openItem === item.id ? "open" : null}
                >
                  <Arrow />
                </ToggleButton>
              </HeadItem>

              {isOpen && openItem === item.id && (
                <BodyItem>
                  {item.body.split("<br />").map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </BodyItem>
              )}
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default ServiceList;
