import { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOption from './ScoopOption';
import { Row } from 'react-bootstrap';
import ToopingOption from './ToopingOption';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        //:TODO handle errors
      });
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToopingOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
