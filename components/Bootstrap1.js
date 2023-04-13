import React from "react";
import { Container, Row, Col, Text, Grid, Image } from "@nextui-org/react";

const Bootstrap1 = ({ direccion, titulo, contedido }) => {
  return (
    <Grid.Container>
      <Grid xs={12} sm={6}>
        <Image
          width={420}
          height={420}
          layout="intrinsic"
          src={direccion}
          alt={titulo}
        />
      </Grid>
      <Grid xs={12} sm={5}>
        <Grid.Container  justify="center" >
          <Grid justify="center">
            <Text h4>{titulo}</Text>
          </Grid>
          <Grid justify="center" >
            <Text >{contedido}</Text>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

export default Bootstrap1;
