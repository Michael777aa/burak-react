import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
  { productName: "Martin", imagePath: "/img/martin.webp" },
  { productName: "Justin", imagePath: "/img/justin.webp" },
  { productName: "Rose", imagePath: "/img/rose.webp" },
  { productName: "Nusret", imagePath: "/img/nusret.webp" },
];

export default function ActiveUsers() {
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((ele, index) => {
                  return (
                    <Card key={index} className="card">
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={ele.imagePath} alt={ele.productName} />
                        </AspectRatio>
                      </CardOverflow>

                      <Stack className="info">
                        <Stack flexDirection="row">
                          <Typography className="title">
                            {ele.productName}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Card>
                  );
                })
              ) : (
                <Box className={"no-data"}>No active Users!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
