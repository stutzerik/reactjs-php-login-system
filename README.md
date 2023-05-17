# Secure ReactJS-PHP login system
Secure login interface based on ReactJS and PHP API, designed with Material-UI. The PHP API server-side counts requests to the webserver - logs and blocks suspicious intruders.

## How it works?
PHP counts requests from an IP address that come from the ReactJS frontend. It records these requests in the MySQL database, and then, if too many are received (100/hour), it refuses PHP data processing. This prevents server overload.

## Install
- Backend: Copy the contents of the folder to the public folder of Apache2 (or another web server).
- Database: Run the SQL code in the sql_dump file & create your database with it.
- Frontend: 
```
cd frontend
npm install
npm run build
npm start
```

Open your browser in http://localhost:3000/

## Functions
This is a small, symbolic project for a possible data security practice.
- Login
- Register
- Logout
- Welcome page

## Licensing

Feel free to use it, but don't forget to mention the source. :)
