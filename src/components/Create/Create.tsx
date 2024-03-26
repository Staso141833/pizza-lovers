import {
  Button,
  Card,
  CardMedia,
  FormControl,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  cardMediaStyles,
  cardStyles,
  createButtonStyles,
  createMainStackStyles,
  createSecondaryStackStyles,
  createTitleStyles,
  formControlStyles,
  formGroupStyles,
  titleFormButtonStackStyles,
} from "./create.styles";

import {
  PizzaName,
  PasteKind,
  Products,
  PastePreparation,
} from "../../models/models";

export const CreatePizza: React.FC = () => {
  const [name, setName] = useState<PizzaName>();
  const [pasteKind, setPasteKind] = useState<PasteKind>();
  const [products, setProducts] = useState<Products>();
  const [pastePreparation, setPastePreparation] = useState<PastePreparation>();

  const nameHandler = (e: any) => {
    setName(e.target.value);
  };

  const pastKindHandler = (e: any) => {
    setPasteKind(e.target.value);
  };

  const productsHandler = (e: any) => {
    setProducts(e.target.value);
  };

  const pastePreparationHandler = (e: any) => {
    setPastePreparation(e.target.value);
  };

  const onLog = () => {
    console.log(name);
  };
  return (
    <Stack sx={createMainStackStyles}>
      <Stack sx={createSecondaryStackStyles}>
        <Card sx={cardStyles}>
          <CardMedia
            sx={cardMediaStyles}
            component="img"
            image="https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*
            "
          ></CardMedia>
        </Card>
        <Stack sx={titleFormButtonStackStyles}>
          <Typography sx={createTitleStyles}>Create you pizza style</Typography>
          <FormGroup sx={formGroupStyles}>
            <FormControl sx={formControlStyles}>
              <TextField
                name="name"
                color="success"
                value={name}
                onChange={nameHandler}
                label="Pizza name"
              ></TextField>
              <TextField
                name="pasteKind"
                color="success"
                value={pasteKind}
                onChange={pastKindHandler}
                label="Kind of paste"
              ></TextField>
              <TextField
                name="products"
                color="success"
                value={products}
                onChange={productsHandler}
                label="Products"
              ></TextField>
              <TextField
                name="pastePreparation"
                color="success"
                value={pastePreparation}
                onChange={pastePreparationHandler}
                label="Paste preparation"
                multiline
                rows={4}
              ></TextField>
            </FormControl>
          </FormGroup>
          <Button
            type="submit"
            variant="contained"
            sx={createButtonStyles}
            onClick={onLog}
          >
            Create pizza
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
