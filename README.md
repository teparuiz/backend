# Backend del comandero

This is an Express service that provides authorization functionality and includes separate folders for users and products.
It also uses Sequelize ORM with SQLite as the database, along with the JSON Web Token (JWT) and AJV libraries.

## Project Structure
 - `index.js`: The main entry point of the application.
 - `config.js`: Contains configuration files for the application.
 - `authorization`
   - `controllers`: Controller files for authentication endpoints.
   - `schemas`: JSON Schemas against which the body of various routes will be validated.
   - `routes.js`: Registers all the authentication routes.
 - `products`
   - `controllers`: Controller files for product master CRUD endpoints.
   - `schemas`: JSON Schemas against which the body of various routes will be validated.
   - `routes.js`: Registers all the product CRUD routes.
 - `users`
   - `controllers`: Controller files for user master CRUD endpoints.
   - `schemas`: JSON Schemas against which the body of various routes will be validated.
   - `routes.js`: Registers all the user CRUD routes.
 - `common`
   - `middlewares`: Various middlewares that can be used in various routes like (isAuthenticated, CheckPermissions etc.)
   - `models`: Sequelise models for the Product and User Tables
 - `storage`: Local storage, that stores all the SQLite tables.

## Prerequisites
Before running the application, make sure you have the following installed:
1. NodeJS (v18)
2. NPM (v9)

## Installation
1. Clone the repository: `git clone https://github.com/teparuiz/backend`
2. Navigate to the project directory: `cd backend`
3. Install the dependencies: `npm install`

## Usage

To start the service, run the following command:
```shell
npm start
```

## License
This project is licensed under the MIT License.




## De esta manera debe estar el JSON

// JSON para corte de caja 

// Ventas 


{
  "venta_id": "123",
  "fecha": "2023-12-07",
  "producto": "Nombre del producto",
  "monto": 50.00,
  "tipo_pago": "efectivo"
}


// Ingresos


{
  "ingreso_id": "456",
  "fecha": "2023-12-07",
  "concepto": "Ingreso por...",
  "monto": 100.00,
  "tipo_ingreso": "efectivo"
}


// Registro de pagos y egresos

{
  "egreso_id": "789",
  "fecha": "2023-12-07",
  "concepto": "Pago por...",
  "monto": 30.00,
  "tipo_pago": "tarjeta"
}

// Conteo de caja

{
  "fecha": "2023-12-07",
  "efectivo": 500.00,
  "tarjeta": 200.00,
  "cheque": 100.00,
  "total": 800.00
}

// Conciliación de documentos


{
  "documento_id": "321",
  "tipo_documento": "factura",
  "estado": "conciliado",
  "monto": 50.00
}


// Revisión de registros
{
  "registros": [
    {
      "tipo": "venta",
      "fecha": "2023-12-07",
      "monto": 50.00
    },
    {
      "tipo": "egreso",
      "fecha": "2023-12-07",
      "monto": 30.00
    }
    // Otros registros
  ]
}

// Saldo real

{
  "fecha": "2023-12-07",
  "saldo_real": 600.00
}


// Registro de discrepancias

{
  "discrepancia_id": "999",
  "fecha": "2023-12-07",
  "tipo_discrepancia": "diferencia en caja",
  "monto": 20.00,
  "comentario": "Desc. en conteo de efectivo"
}

// Calculos que debe hacer la API 

Suma y resta de montos de ventas, ingresos, pagos y egresos para el cálculo del saldo.
Validación de documentos conciliados para asegurar que los montos cuadren.
Comparación entre registros y conteo de caja para identificar discrepancias.
Generación de resúmenes y reportes basados en los datos registrados.

// Resumen global 'GET '
{
"id": 
  "resumen_general": {
    "fecha": "2023-12-07",
    "saldo_efectivo": 500.00,
    "saldo_tarjeta": 200.00,
    "total_ventas": 150.00,
    "total_ingresos": 100.00,
    "total_egresos": 30.00,
    "total_conciliado": 50.00,
    "saldo_real": 570.00,
    "discrepancias_registradas": [
      {
        "discrepancia_id": "999",
        "tipo_discrepancia": "diferencia en caja",
        "monto": 20.00,
        "comentario": "Desc. en conteo de efectivo"
      }
    ],
    "documentacion": [
      {
        "documento_id": "321",
        "tipo_documento": "factura",
        "estado": "conciliado",
        "monto": 50.00
      }
      // Otros documentos
    ]
  }
}
