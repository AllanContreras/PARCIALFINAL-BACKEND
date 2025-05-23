
# Backend - ECI Salud Vital


## Descripción

Este backend permite gestionar especialidades y citas médicas para la clínica ECI Salud Vital. Está desarrollado en Node.js con Express y utiliza MongoDB como base de datos.

## Endpoints

- `GET /api/especialidades`: Lista todas las especialidades.
- `GET /api/especialidades/:id`: Detalle de una especialidad.
- `POST /api/citas`: Programa una nueva cita.
- `GET /api/citas/usuario/:correo`: Obtiene las citas de un usuario por su correo.
- `PATCH /api/citas/cancelar/:id`: Cancela una cita.
- `GET /api/citas/estado/:estado`: Filtra citas por estado.

## Colecciones MongoDB (Ejemplos)

### Especialidades
```json
{
  "_id": "664fdac416321fd6c377a111",
  "nombre": "Medicina General",
  "imagen": "https://example.com/medicina.jpg",
  "descripcion": "Atención primaria de salud.",
  "doctor": "Dra. Gómez",
  "ubicacion": "Piso 1, Consultorio 101"
}
```
<img width="959" alt="image" src="https://github.com/user-attachments/assets/4a221b79-59ca-4905-9a10-e4d753143035" />


### Citas
```json
{
  "_id": "6650ec7d9429a1e9aa1b2999",
  "nombre": "Carlos Ramírez",
  "cedula": "123456789",
  "correo": "carlos@gmail.com",
  "fecha": "23-05-2025",
  "especialidad": "Psicología",
  "doctor": "Dra. López",
  "ubicacion": "Piso 3, Consultorio 305",
  "estado": "Confirmada"
}
```
<img width="959" alt="image" src="https://github.com/user-attachments/assets/d93e322f-e449-4ebc-94fb-905136db84ba" />

<img width="388" alt="image" src="https://github.com/user-attachments/assets/91f90ea2-6306-4825-aa80-4bf3aa788dc1" />



## Cómo Ejecutar

```bash
npm install
npm run dev
```



