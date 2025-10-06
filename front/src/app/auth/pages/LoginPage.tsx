import {
    Box,
    Container,
    Typography,
    Paper,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import { Lock } from '@mui/icons-material';
import LoginForm from '../components/LoginForm';

// Tema personalizado con azul marino
const theme = createTheme({
    palette: {
        primary: {
            main: '#0d47a1', // Azul marino
            light: '#5472d3',
            dark: '#002171',
            contrastText: '#fff',
        },
        secondary: {
            main: '#1565c0',
            light: '#5e92f3',
            dark: '#003c8f',
            contrastText: '#fff',
        },
        background: {
            default: '#e3f2fd',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
        borderRadius: 12,
    },
});

function LoginPage() {
    const handleLogin = (formData: { username: string; password: string }) => {
        console.log('Login submitted:', formData);
        // Aquí puedes agregar la lógica de autenticación
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0d47a1 0%, #1976d2 50%, #42a5f5 100%)',
                    padding: 2,
                }}
            >
                <Container maxWidth="sm">
                    <Paper
                        elevation={24}
                        sx={{
                            padding: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: 3,
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        {/* Logo o icono */}
                        <Box
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                backgroundColor: 'primary.main',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 2,
                                boxShadow: 3,
                            }}
                        >
                            <Lock sx={{ fontSize: 40, color: 'white' }} />
                        </Box>

                        {/* Título */}
                        <Typography
                            component="h1"
                            variant="h4"
                            sx={{
                                marginBottom: 1,
                                fontWeight: 700,
                                color: 'primary.main',
                            }}
                        >
                            Iniciar Sesión
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                marginBottom: 3,
                                color: 'text.secondary',
                            }}
                        >
                            Ingresa tus credenciales para continuar
                        </Typography>

                        {/* Formulario */}
                        <LoginForm onSubmit={handleLogin} />
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default LoginPage;
