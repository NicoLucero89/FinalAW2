import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { readFile, writeFile } from 'fs/promises';

const filePath = './data/usuarios.json';
const SECRET = process.env.SECRET_KEY;

const loadUserData = async () => {
    const fileUsers = await readFile(filePath, 'utf-8');
    return JSON.parse(fileUsers);
};

const saveUserData = async (userData) => {
    try {
        await writeFile(filePath, JSON.stringify(userData, null, 2));
    } catch (error) {
        throw new Error('Error guardando los datos de usuarios');
    }
};

export const getUserById = async (req, res) => {
    try {
        const userData = await loadUserData();
        const user = userData.find(e => e.id === parseInt(req.params.id));
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const userData = await loadUserData();
        const user = userData.find(e => e.email === req.body.email);
        if (user && bcrypt.compareSync(req.body.contraseña, user.contraseña)) {
            const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: 86400 });
            res.status(200).json({ ...user, token });
        } else {
            res.status(401).json({ error: "Credenciales incorrectas" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const registerUser = async (req, res) => {
    try {
        const userData = await loadUserData();
        const hashedPassword = bcrypt.hashSync(req.body.contraseña, 8);
        const newUser = { ...req.body, contraseña: hashedPassword, id: userData.length + 1 };
        userData.push(newUser);
        await saveUserData(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
