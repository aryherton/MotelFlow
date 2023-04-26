/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
'use client';
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

import { quartos } from '../../utils/mock/quartos';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

const drawerWidth = 240;

interface StyledCardProps {
  theme: unknown;
  status: string;
}

const StyledCard = styled(Card)<StyledCardProps>(({ theme, status }) => ({
  border: status === 'Ocupado' ? `2px solid red` :
    status === 'em_manutenção' ? `2px solid orange` : `none`,
  '&:hover': {
    border: `2px solid green`
  },
  background_color: theme.palette.primary.main,
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Comandas', 'Estoque'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center'
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {text === 'Comandas' && <PriceChangeOutlinedIcon />}
                  {text === 'Estoque' && <Inventory2OutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Admin', 'Fechar Caixa', 'Sair'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center'
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {text === 'Fechar Caixa' && <MonetizationOnOutlinedIcon />}
                  {text === 'Admin' && <ManageAccountsOutlinedIcon />}
                  {text === 'Sair' && <LogoutOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Grid2 container spacing={3}>
          {quartos.map((quarto) => {
            return (
              <CardActions key={quarto.id}>
                <Button size="small">
                  <StyledCard
                    status={quarto.status}
                    sx={{
                      width: 300,
                      height: 200,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      marginRight: 2,
                      marginBottom: 2,
                      alignItems: 'center',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        border: '1px solid green'
                      }
                    }}
                    theme={undefined}
                  >
                    {/* <CardMedia
                      component="img"
                      height="200"
                      image={quarto.imagem}
                      alt={quarto.alt}
                      sx={{
                        backgroundColor: 'gray',
                      }}
                    /> */}
                    <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <p>{ 'Quarto' }</p>
                        {quarto.numero}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {quarto.status}
                      </Typography>
                    </CardContent>
                    {
                      quarto.status === 'em_manutenção' && (
                        <CardActions>
                          <Button size="small">Liberar Quarto</Button>
                        </CardActions>
                      )
                    }
                  </StyledCard>
                </Button>
              </CardActions>
            );
          })}
        </Grid2>
        <Typography paragraph>
          - Mostrar dados do caixa. Quem é o usário responsável pelo caixa.<br />
          - Quantidade total de cada moeda e cedula.<br />
          - Quantidade total pago em cartão. Terá a opção de clicar em cima, e ver
          todos as comandas pagas com cartão.<br />
          - Quantidade total pago em pix. Terá a opção de clicar em cima, e ver
          todos as comandas pagas com pix.<br />
          - Quantidade total pago em dinheiro. Terá a opção de clicar em cima, e
          ver todos as comandas pagas com dinheiro.<br />
          - Valor total do caixa da quele usuário.<br />
          - Ao sair da pagina e o caixa não tiver sido fechado, perguntar se o usuário
          quer fechar a pagina sem fechar o caixa.<br />
          - Ao fechar o caixa, o usuário ira confirmar que todos os valores estão corretos,
          exemplo: se a quantidade de moedas de 25 centavos está correta, quantidade de notas de 2, 5, 10, 20, 50 e 100
          estão corretas.<br />
          - Confirmar o valor total do caixa, se bate com o que tem em caixa.<br />
          - Deve também informar para quem está passando o caixa.<br />
          - O usuário ao fechar e abrir o caixa, deve ter o campo "Observação, para relatar qualquer coisa que
          aconteceu durante o turno.<br />
          - Ao logar no sistema o usuário vai ver se tem um caixa sendo passado para ele, se tiver, ele vai ter que
          confirmar que recebeu o caixa, e se o valor está correto.<br />
          - Se o usuário acessar o sistema e não tiver nenhum notificação de caixa sendo passado para ele. Ele não vai consiguir abir o caixa.<br />
          - Só o Administrador tem permissão para abrir o caixa. E só conseguirar abrir um novo caixa se o caixa anterior estiver fechado. Caso não esteja, ele deve fechar o caixa e passar para alguém. Ou se o caixa anterior estiver fechado, ele pode abrir.<br />
          - Apenas o Administrador poderar abrir caixas já fechado, para edição.
        </Typography>
      </Box>
    </Box>
  );
}
