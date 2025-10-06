import { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    InputAdornment,
    IconButton,
} from '@mui/material';
import {
    Visibility,
    VisibilityOff,
    Lock,
    Person,
} from '@mui/icons-material';

interface LoginFormData {
    username: string;
    password: string;
}

interface LoginFormProps {
    onSubmit?: (formData: LoginFormData) => void;
}

function LoginForm({ onSubmit }: LoginFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<LoginFormData>({
        username: '',
        password: '',
    });

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login data:', formData);
        // Llama a la función onSubmit si está definida
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '100%' }}
        >
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Usuario"
                name="username"
                autoComplete="username"
                autoFocus
                value={formData.username}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Person sx={{ color: 'primary.main' }} />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            borderColor: 'primary.main',
                        },
                    },
                }}
            />

            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Lock sx={{ color: 'primary.main' }} />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            borderColor: 'primary.main',
                        },
                    },
                }}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    marginTop: 3,
                    marginBottom: 2,
                    padding: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: 3,
                    '&:hover': {
                        boxShadow: 6,
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s',
                    },
                }}
            >
                Ingresar
            </Button>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 2,
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: 'primary.main',
                        cursor: 'pointer',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    ¿Olvidaste tu contraseña?
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'primary.main',
                        cursor: 'pointer',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    Crear cuenta
                </Typography>
            </Box>
        </Box>
    );
}

export default LoginForm;
