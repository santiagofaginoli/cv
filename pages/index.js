import react from "react";
import { Grid, Text } from "@nextui-org/react";
import Layout from "/components/Layout";
import Bootstrap1 from "@/components/Bootstrap1";
import { educacion, favoritos, habilidades } from "/utils/objs";

export default function Home() {
  return (
    <Layout>
      <section>
        <Grid.Container justify="center">
          <Text h2>Sobre mi</Text>
        </Grid.Container>

        <Bootstrap1
          direccion={"/img/3d-foto.avif"}
          contedido={
            "Me llamo Santiago Faginoli, tengo 17 años, estoy cursando el ultimo año de secundaria y aspiro a la licenciatura en ciencias de la computacion"
          }
        />
      </section>
      <section>
        <Grid.Container justify="center">
          <Grid justify="center" sm={12}>
            <Text h2>Educacion</Text>
          </Grid>
          <Grid>
            {educacion.map((item) => {
              return (
                <div id={item.id}>
                  <Text>-{item.text}</Text>
                </div>
              );
            })}
          </Grid>
        </Grid.Container>
      </section>
      <section>
        <Grid.Container justify="center" css={{ marginTop: "120px" }}>
          <Grid justify="center" sm={12}>
            <Text h2>Actividades favoritas</Text>
          </Grid>
          <Grid sm={12} justify="center">
            <Text h6>Estas son algunas de mis actividades favoritas:</Text>
          </Grid>

          <Grid css={{ marginTop: "30px" }}>
            <Grid.Container justify="center">
              {favoritos.map((item) => {
                return (
                  <Grid sm={6} justify="center">
                    <Text>-{item.text}</Text>
                  </Grid>
                );
              })}
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </section>

      <section>
        <Grid.Container>
          <Grid sm={6}>
            <Grid.Container justify="center" css={{ marginTop: "120px" }}>
              <Grid justify="center" sm={12}>
                <Text h2>habilidades profesionales</Text>
              </Grid>
              <Grid sm={12} justify="center">
                <Text h6>
                  Dentro de mis habilidades profesionales podemos encontrar:
                </Text>
              </Grid>
              <Grid css={{ marginTop: "30px" }}>
                <Grid.Container justify="center">
                  {habilidades.map((item) => {
                    return (
                      <Grid sm={6} justify="center">
                        <Text>-{item.text}</Text>
                      </Grid>
                    );
                  })}
                </Grid.Container>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid sm={6}>
            <Grid.Container justify="center" css={{ marginTop: "120px" }}>
              <Grid justify="center" alignItems="center" sm={12}>
                <Text css={{ padding: "10%", alignItems: "center" }} h5>
                  me gustiaria estudiar ciencias de la computacion, porque me
                  encanta la programacion. las matematicas y el pensamiento logico.
                </Text>
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </section>
    </Layout>
  );
}
