# Secure ReactJS-PHP login system
Secure login interface based on ReactJS and PHP API, designed with Material-UI. The PHP API server-side counts requests to the webserver - logs and blocks suspicious intruders.

## How it works?
PHP counts requests from an IP address that come from the ReactJS frontend. It records these requests in the MySQL database, and then, if too many are received (100/hour), it refuses PHP data processing. This prevents server overload.
